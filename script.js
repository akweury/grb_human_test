// script.js

// Get principle from URL, default to 'closure'
function getPrinciple() {
  const params = new URLSearchParams(window.location.search);
  return params.get('principle') || 'closure';
}

const PRINCIPLE = getPrinciple();

// Map principle to display name (capitalize)
const PRINCIPLE_DISPLAY = {
  closure: "Closure",
  proximity: "Proximity",
  similarity: "Similarity",
  continuity: "Continuity",
  symmetry: "Symmetry"
};

document.addEventListener("DOMContentLoaded", () => {
  const titleDiv = document.getElementById("principle-title");
  if (titleDiv) {
    titleDiv.textContent = `Principle: ${PRINCIPLE_DISPLAY[PRINCIPLE] || PRINCIPLE}`;
  }
});

const BASE_URL = `https://huggingface.co/datasets/akweury/ELVIS/resolve/main/${PRINCIPLE}`;
const TRAIN_API = `https://huggingface.co/api/datasets/akweury/ELVIS/tree/main/${PRINCIPLE}/train`;
const TEST_API = `https://huggingface.co/api/datasets/akweury/ELVIS/tree/main/${PRINCIPLE}/test`;

const TASK_COUNT = 10;

let trainFolders = [];
let testFolders = [];
let currentTaskIndex = 0;
let selectedImages = new Set();
let taskResults = [];
let selectedTasks = [];
let startTime;

// Add this global to store hardness feedback for each task
let taskHardness = [];

const grid = document.getElementById("image-grid");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submit-button");
submitBtn.innerText = "Next Task";

const progressBar = document.getElementById("progress-bar");
const taskCounter = document.getElementById("task-counter");

const downloadBtn = document.createElement("button");
downloadBtn.innerText = "Download Results";
downloadBtn.style.display = "none";
downloadBtn.onclick = () => {
  // Save both the principle and the results in the JSON file
  const output = {
    principle: PRINCIPLE,
    results: taskResults
  };
  const blob = new Blob([JSON.stringify(output, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // Generate filename with current date and time
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const filename = `grb_results_${PRINCIPLE}_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}.json`;

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
};
document.body.insertBefore(downloadBtn, resultDiv);

function updateTaskCounter(index, total) {
  if (taskCounter) {
    taskCounter.textContent = `Task ${index + 1} / ${total}`;
  }
}

function updateTaskIdDisplay(taskId) {
  const taskIdDiv = document.getElementById("task-id");
  if (taskIdDiv) {
    taskIdDiv.textContent = `Task ID: ${taskId}`;
  }
}

async function fetchFolders(apiUrl) {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data.filter(item => item.type === "directory").map(item => item.path.split("/").pop());
}

function sampleTasksFrom(train, test, n) {
  const minLen = Math.min(train.length, test.length);
  const pairs = train.slice(0, minLen).map((name, i) => ({ train: name, test: test[i] }));
  return pairs.sort(() => Math.random() - 0.5).slice(0, n).map(({ train, test }) => ({
    train,
    test,
    imageSet: generateImageSet(train, test)
  }));
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateImageSet(trainName, testName) {
  const pos = [0, 1, 2].map(i => `${i.toString().padStart(5, '0')}.png`);
  const neg = [0, 1, 2].map(i => `${i.toString().padStart(5, '0')}.png`);

  const trainPos = pos.map((file, i) => ({
    id: `${trainName}_train_pos_${i}`,
    url: `${BASE_URL}/train/${trainName}/positive/${file}`,
    isPositive: true,
    row: "train"
  }));

  const trainNeg = neg.map((file, i) => ({
    id: `${trainName}_train_neg_${i}`,
    url: `${BASE_URL}/train/${trainName}/negative/${file}`,
    isPositive: false,
    row: "train"
  }));

  const testImages = shuffle([...pos, ...neg].map((file, idx) => ({
    id: `${testName}_test_${idx}`,
    url: `${BASE_URL}/test/${testName}/${idx < 3 ? "positive" : "negative"}/${file}`,
    isPositive: idx < 3,
    row: "test"
  })));

  return { trainPos, trainNeg, testImages };
}

function displayImages({ trainPos, trainNeg, testImages }) {
  // Show the task ID at the top using the first trainPos image as the task ID (or use another identifier as needed)
  if (trainPos && trainPos.length > 0) {
    updateTaskIdDisplay(trainPos[0].id.split('_train_pos_')[0]);
  }

  grid.innerHTML = "";
  selectedImages.clear();

  const trainLabel = document.createElement("h3");
  trainLabel.innerText = "Training Images";
  trainLabel.className = "training-title";
  grid.appendChild(trainLabel);

  const trainRow = document.createElement("div");
  trainRow.className = "image-row";
  trainPos.forEach(({ id, url }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = id;
    img.className = "static-image thumb train-positive";
    trainRow.appendChild(img);
  });
  trainNeg.forEach(({ id, url }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = id;
    img.className = "static-image thumb train-negative";
    trainRow.appendChild(img);
  });
  grid.appendChild(trainRow);

  const testLabel = document.createElement("h3");
  testLabel.innerText = "Test Images (click to select positives)";
  grid.appendChild(testLabel);

  const testRow = document.createElement("div");
  testRow.className = "image-row";
  testImages.forEach(({ id, url }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = id;
    img.className = "selectable-image thumb";
    img.onclick = () => {
      img.classList.toggle("selected");
      if (selectedImages.has(id)) {
        selectedImages.delete(id);
      } else {
        selectedImages.add(id);
      }
    };
    testRow.appendChild(img);
  });
  grid.appendChild(testRow);


  // // --- Add horizontal split line before feedback buttons ---
  // // Remove old split line if any
  // const oldSplitLine = document.getElementById("hardness-split-line");
  // if (oldSplitLine) oldSplitLine.remove();

  // // Create and style the split line (now inside the grid, not fixed)
  // const splitLine = document.createElement("hr");
  // splitLine.id = "hardness-split-line";
  // splitLine.style.width = "100%";
  // splitLine.style.border = "none";
  // splitLine.style.borderTop = "2px solid #bbb";
  // splitLine.style.margin = "32px 0 24px 0";
  // grid.appendChild(splitLine);


  // Remove old hardness feedback buttons if any
  const oldHardnessDiv = document.getElementById("hardness-feedback");
  if (oldHardnessDiv) oldHardnessDiv.remove();


  // Add hardness feedback panel below the split line, inside the grid
  const hardnessDiv = document.createElement("div");
  hardnessDiv.id = "hardness-feedback";
  hardnessDiv.style.zIndex = "2000";
  hardnessDiv.style.display = "flex";
  hardnessDiv.style.flexDirection = "column";
  hardnessDiv.style.alignItems = "flex-end"; // You can change to "center" or "flex-start" if you want
  hardnessDiv.style.gap = "10px";
  hardnessDiv.style.margin = "8px 0 0 0"; // Small gap above the panel


  // Add instruction text above the buttons
  const hardnessText = document.createElement("div");
  hardnessText.innerText = "How did you feel about this task?\nPlease select:";
  hardnessText.style.fontSize = "1.3em";
  hardnessText.style.fontWeight = "500";
  hardnessText.style.color = "#333";
  hardnessText.style.background = "rgba(255,255,255,0.0)";
  hardnessText.style.padding = "8px 0";
  hardnessText.style.borderRadius = "8px";
  hardnessText.style.marginBottom = "6px";
  hardnessText.style.textAlign = "right";
  hardnessDiv.appendChild(hardnessText);

  const btnRow = document.createElement("div");
  btnRow.style.display = "flex";
  btnRow.style.flexDirection = "row";
  btnRow.style.gap = "32px";

  // Helper to set button styles based on state
  function setBtnState(btn, type, selected) {
    btn.style.background = selected ? (type === "easy" ? "#43a047" : "#e53935") : "transparent";
    btn.style.color = selected ? "#fff" : (type === "easy" ? "#43a047" : "#e53935");
    btn.style.border = `3px solid ${type === "easy" ? "#43a047" : "#e53935"}`;
    btn.style.boxShadow = selected ? `0 4px 24px ${type === "easy" ? "#43a04744" : "#e5393544"}` : "none";
    btn.style.transition = "background 0.2s, color 0.2s, box-shadow 0.2s";
  }

  // Easy Button
  const easyBtn = document.createElement("button");
  easyBtn.innerText = "😊 Easy";
  easyBtn.style.padding = "24px 48px";
  easyBtn.style.fontSize = "2em";
  easyBtn.style.borderRadius = "16px";
  easyBtn.style.cursor = "pointer";
  setBtnState(easyBtn, "easy", taskHardness[currentTaskIndex] === "easy");

  // Hard Button
  const hardBtn = document.createElement("button");
  hardBtn.innerText = "😮‍💨 Hard";
  hardBtn.style.padding = "24px 48px";
  hardBtn.style.fontSize = "2em";
  hardBtn.style.borderRadius = "16px";
  hardBtn.style.cursor = "pointer";
  setBtnState(hardBtn, "hard", taskHardness[currentTaskIndex] === "hard");

  // Button click handlers
  easyBtn.onclick = () => {
    taskHardness[currentTaskIndex] = "easy";
    setBtnState(easyBtn, "easy", true);
    setBtnState(hardBtn, "hard", false);
  };
  hardBtn.onclick = () => {
    taskHardness[currentTaskIndex] = "hard";
    setBtnState(easyBtn, "easy", false);
    setBtnState(hardBtn, "hard", true);
  };

  // Hover effects
  easyBtn.onmouseenter = () => {
    if (taskHardness[currentTaskIndex] !== "easy") {
      easyBtn.style.background = "#e8f5e9";
      easyBtn.style.color = "#2e7031";
    }
  };
  easyBtn.onmouseleave = () => {
    setBtnState(easyBtn, "easy", taskHardness[currentTaskIndex] === "easy");
  };
  hardBtn.onmouseenter = () => {
    if (taskHardness[currentTaskIndex] !== "hard") {
      hardBtn.style.background = "#ffebee";
      hardBtn.style.color = "#a02725";
    }
  };
  hardBtn.onmouseleave = () => {
    setBtnState(hardBtn, "hard", taskHardness[currentTaskIndex] === "hard");
  };

  btnRow.appendChild(easyBtn);
  btnRow.appendChild(hardBtn);
  hardnessDiv.appendChild(btnRow);
  document.body.appendChild(hardnessDiv);
}

function createResultTable(allResults) {
  const table = document.createElement("table");
  table.className = "result-table";
  const header = table.insertRow();
  ["Task", "Image ID", "Selected", "Is Positive", "Correct", "Time (s)"].forEach(text => {
    const th = document.createElement("th");
    th.innerText = text;
    header.appendChild(th);
  });

  allResults.forEach(({ task, result }) => {
    result.forEach(r => {
      const row = table.insertRow();
      [task, r.id, r.selected, r.isPositive, r.correct, r.timeTaken].forEach(val => {
        const cell = row.insertCell();
        cell.innerText = val;
      });
    });
  });

  return table;
}

function evaluateTask(testImages, duration) {
  return testImages.map(({ id, isPositive }) => {
    const selected = selectedImages.has(id);
    return {
      id,
      selected,
      isPositive,
      correct: selected === isPositive,
      timeTaken: duration
    };
  });
}

submitBtn.onclick = () => {
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  const currentSet = selectedTasks[currentTaskIndex];
  const result = evaluateTask(currentSet.imageSet.testImages, duration);

  // Save hardness feedback for this task
  const hardness = taskHardness[currentTaskIndex] || null;

  taskResults.push({ task: currentSet.test, result, hardness });

  currentTaskIndex++;

  // Remove hardness feedback buttons for next task or result page
  const oldHardnessDiv = document.getElementById("hardness-feedback");
  if (oldHardnessDiv) oldHardnessDiv.remove();

  if (currentTaskIndex === selectedTasks.length) {
    progressBar.style.width = `100%`;
    grid.innerHTML = "";
    submitBtn.style.display = "none";
    downloadBtn.style.display = "inline-block";

    const total = taskResults.flatMap(r => r.result);
    const correct = total.filter(r => r.correct).length;
    const percent = total.length > 0 ? (correct / total.length) : 0;

    // Friendly, supportive feedback
    let feedback = "";
    if (percent >= 0.85) {
      feedback = "Great job! Your careful work really helps our research.";
    } else if (percent >= 0.7) {
      feedback = "Nice effort! Your answers are valuable for our study.";
    } else if (percent >= 0.5) {
      feedback = "These were tricky tasks—thanks for your thoughtful participation!";
    } else {
      feedback = "Those were challenging tasks—your contribution is truly appreciated!";
    }

    const resultSummary = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 45vh;
        width: 100%;
      ">
        <div style="
          font-size: 3.2em;
          font-weight: bold;
          color: #1976d2;
          margin-bottom: 18px;
          text-align: center;
          line-height: 1.2;
        ">
          Your Performance<br>
          <span style="font-size:1.2em;">${correct} / ${total.length} correct</span>
        </div>
        <div style="font-size: 1.5em; margin-bottom: 18px; color: #388e3c; text-align: center;">
          ${feedback}
        </div>
        <div style="font-size: 1.3em; margin-bottom: 18px; text-align: center;">
          You completed ${TASK_COUNT} tasks.
        </div>
        <div style="display: flex; gap: 24px; margin-top: 32px;">
          <button id="download-results-btn" style="
            padding: 14px 32px;
            font-size: 1.1em;
            background: #0077ff;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
          ">Download Results</button>
          <button id="upload-results-btn" style="
            padding: 14px 32px;
            font-size: 1.1em;
            background: #43a047;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
          ">Upload Results</button>
          <button id="more-tests-btn" style="
            padding: 14px 32px;
            font-size: 1.1em;
            background: #0077ff;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
          ">Do More Tests</button>
        </div>
      </div>
    `;
    const resultTable = createResultTable(taskResults);
    resultDiv.style.display = "block";
    resultDiv.innerHTML = resultSummary;
    resultDiv.appendChild(resultTable);

    // Hide the original downloadBtn
    downloadBtn.style.display = "none";

    // Add event listeners for the new buttons
    const downloadResultsBtn = document.getElementById("download-results-btn");
    if (downloadResultsBtn) {
      downloadResultsBtn.onclick = downloadBtn.onclick;
    }
    const uploadResultsBtn = document.getElementById("upload-results-btn");
    if (uploadResultsBtn) {
      uploadResultsBtn.onclick = () => {
        const output = {
          principle: PRINCIPLE,
          results: taskResults
        };
        const now = new Date();
        const pad = n => n.toString().padStart(2, '0');
        const filename = `grb_results_${PRINCIPLE}_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}.json`;
        uploadResultToHuggingFace(output, filename);
      };
    }
    const moreTestsBtn = document.getElementById("more-tests-btn");
    if (moreTestsBtn) {
      moreTestsBtn.onclick = () => {
        window.location.href = "index.html";
      };
    }
    return;
  }

  const progressPercent = (currentTaskIndex / TASK_COUNT) * 100;
  progressBar.style.width = `${progressPercent}%`;
  updateTaskCounter(currentTaskIndex, TASK_COUNT);

  startTime = Date.now();
  displayImages(selectedTasks[currentTaskIndex].imageSet);
  updateTaskCounter(currentTaskIndex, TASK_COUNT);
  updateTaskIdDisplay(selectedTasks[currentTaskIndex].test); // Show the new task ID

};

// Upload result JSON to Hugging Face Space FastAPI endpoint
async function uploadResultToHuggingFace(resultJson, filename = "result.json") {
  const endpoint = "https://akweury-elvis-human.hf.space/upload";
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(resultJson, null, 2)], { type: 'application/json' });
  formData.append("file", blob, filename);

  try {
    const response = await fetch(endpoint, { method: "POST", body: formData });
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      alert("❌ Upload failed: Server did not return JSON.\n\n" + text);
      return;
    }
    if (data.success) {
      alert("✅ Result uploaded successfully!");
    } else {
      alert("❌ Upload failed: " + (data.msg || "Unknown error"));
    }
  } catch (err) {
    alert("❌ Upload failed: " + err.message);
  }
}

(async function init() {
  trainFolders = await fetchFolders(TRAIN_API);
  testFolders = await fetchFolders(TEST_API);
  selectedTasks = sampleTasksFrom(trainFolders, testFolders, TASK_COUNT);
  startTime = Date.now();
  displayImages(selectedTasks[0].imageSet);
  updateTaskIdDisplay(selectedTasks[0].test);
  updateTaskCounter(0, TASK_COUNT);
})();