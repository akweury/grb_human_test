// script.js

const BASE_URL = "https://huggingface.co/datasets/akweury/ELVIS/resolve/main/closure";
const TRAIN_API = "https://huggingface.co/api/datasets/akweury/ELVIS/tree/main/closure/train";
const TEST_API = "https://huggingface.co/api/datasets/akweury/ELVIS/tree/main/closure/test";
const TASK_COUNT = 10;

let trainFolders = [];
let testFolders = [];
let currentTaskIndex = 0;
let selectedImages = new Set();
let taskResults = [];
let selectedTasks = [];
let startTime;

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
  const blob = new Blob([JSON.stringify(taskResults, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "grb_results.json";
  a.click();
};
document.body.insertBefore(downloadBtn, resultDiv);

function updateTaskCounter(index, total) {
  if (taskCounter) {
    taskCounter.textContent = `Task ${index + 1} / ${total}`;
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
  grid.innerHTML = "";
  selectedImages.clear();

  const trainLabel = document.createElement("h3");
  trainLabel.innerText = "Training Images";
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
  taskResults.push({ task: currentSet.test, result });

  currentTaskIndex++;

  if (currentTaskIndex === selectedTasks.length) {
    progressBar.style.width = `100%`;
    grid.innerHTML = "";
    submitBtn.style.display = "none";
    downloadBtn.style.display = "inline-block";

    const total = taskResults.flatMap(r => r.result);
    const correct = total.filter(r => r.correct).length;

    const resultSummary = `<p>You completed ${TASK_COUNT} tasks.<br>Total correct: <strong>${correct}</strong> / ${total.length}</p>`;
    const resultTable = createResultTable(taskResults);
    resultDiv.innerHTML = resultSummary;
    resultDiv.appendChild(resultTable);
    return;
  }

  const progressPercent = (currentTaskIndex / TASK_COUNT) * 100;
  progressBar.style.width = `${progressPercent}%`;
  updateTaskCounter(currentTaskIndex, TASK_COUNT);

  startTime = Date.now();
  displayImages(selectedTasks[currentTaskIndex].imageSet);
};

(async function init() {
  trainFolders = await fetchFolders(TRAIN_API);
  testFolders = await fetchFolders(TEST_API);
  selectedTasks = sampleTasksFrom(trainFolders, testFolders, TASK_COUNT);
  startTime = Date.now();
  displayImages(selectedTasks[0].imageSet);
  updateTaskCounter(0, TASK_COUNT);
})();