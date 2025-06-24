// script.js

// const TRANSLATIONS = {
//   en: {
//     principle: "Principle",
//     trainingImages: "Training Images",
//     testImages: "Test Images (click to select positives)",
//     easy: "😊 Easy",
//     hard: "😮‍💨 Hard",
//     hardnessPrompt: "How did you feel about this task?\nPlease select:",
//     nextTask: "Next Task",
//     downloadResults: "Download Results",
//     task: "Task",
//     imageId: "Image ID",
//     selected: "Selected",
//     isPositive: "Is Positive",
//     correct: "Correct",
//     timeTaken: "Time (s)",
//     yourPerformance: "Your Performance",
//     correctCount: "{correct} / {total} correct",
//     completedTasks: "You completed {count} tasks.",
//     feedbackGreat: "Great job! Your careful work really helps our research.",
//     feedbackNice: "Nice effort! Your answers are valuable for our study.",
//     feedbackTricky: "These were tricky tasks—thanks for your thoughtful participation!",
//     feedbackChallenging: "Those were challenging tasks—your contribution is truly appreciated!",
//     downloadResultsBtn: "Download Results",
//     uploadResultsBtn: "Upload Results",
//     moreTestsBtn: "Do More Tests",
//     taskId: "Task ID: {id}"
//   },
//   zh: {
//     principle: "原则",
//     trainingImages: "训练图片",
//     testImages: "测试图片（点击选择正样本）",
//     easy: "😊 简单",
//     hard: "😮‍💨 困难",
//     hardnessPrompt: "您觉得这个任务如何？\n请选择：",
//     nextTask: "下一个任务",
//     downloadResults: "下载结果",
//     task: "任务",
//     imageId: "图片ID",
//     selected: "已选",
//     isPositive: "正样本",
//     correct: "正确",
//     timeTaken: "用时（秒）",
//     yourPerformance: "您的表现",
//     correctCount: "{correct} / {total} 正确",
//     completedTasks: "您完成了 {count} 个任务。",
//     feedbackGreat: "干得好！您的认真帮助了我们的研究。",
//     feedbackNice: "不错的努力！您的答案对我们的研究很有价值。",
//     feedbackTricky: "这些任务很有挑战性——感谢您的参与！",
//     feedbackChallenging: "这些任务很难——非常感谢您的贡献！",
//     downloadResultsBtn: "下载结果",
//     uploadResultsBtn: "上传结果",
//     moreTestsBtn: "再做一些测试",
//     taskId: "任务ID：{id}"
//   },
//   de: {
//     principle: "Prinzip",
//     trainingImages: "Trainingsbilder",
//     testImages: "Testbilder (klicken Sie, um Positive auszuwählen)",
//     easy: "😊 Einfach",
//     hard: "😮‍💨 Schwierig",
//     hardnessPrompt: "Wie empfanden Sie diese Aufgabe?\nBitte auswählen:",
//     nextTask: "Nächste Aufgabe",
//     downloadResults: "Ergebnisse herunterladen",
//     task: "Aufgabe",
//     imageId: "Bild-ID",
//     selected: "Ausgewählt",
//     isPositive: "Positiv",
//     correct: "Korrekt",
//     timeTaken: "Zeit (s)",
//     yourPerformance: "Ihre Leistung",
//     correctCount: "{correct} / {total} korrekt",
//     completedTasks: "Sie haben {count} Aufgaben abgeschlossen.",
//     feedbackGreat: "Großartige Arbeit! Ihre sorgfältige Arbeit hilft unserer Forschung sehr.",
//     feedbackNice: "Gute Arbeit! Ihre Antworten sind wertvoll für unsere Studie.",
//     feedbackTricky: "Das waren knifflige Aufgaben – danke für Ihre Teilnahme!",
//     feedbackChallenging: "Das waren schwierige Aufgaben – Ihr Beitrag wird sehr geschätzt!",
//     downloadResultsBtn: "Ergebnisse herunterladen",
//     uploadResultsBtn: "Ergebnisse hochladen",
//     moreTestsBtn: "Weitere Tests durchführen",
//     taskId: "Aufgaben-ID: {id}"
//   }
// };



// Add this after defining TRANSLATIONS, LANG, and T
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  window.dispatchEvent(new Event('languageChanged'));
}
window.setLanguage = setLanguage; // <-- This makes it global
// Remove or comment out the old TRANSLATIONS definition and all references to it

// Use the translations object from lang.js
const LANG = localStorage.getItem("lang") || (navigator.language || "en").slice(0, 2);
const T = (typeof translations !== "undefined" ? translations[LANG] : undefined) || translations.en;

function renderTaskLang() {
  const lang = localStorage.getItem('lang') || (navigator.language || "en").slice(0, 2);
  const t = typeof translations !== "undefined" ? translations[lang] || translations['en'] : {};
  // Update all relevant elements
  const corner = document.querySelector('.corner-title');
  if (corner) corner.textContent = t["task-corner-title"] || "Gestalt Benchmark – Human Evaluation";
  const title = document.getElementById('principle-title');
  if (title) title.textContent = t["task-title"] || "Gestalt Benchmark – Main Task";
  const submit = document.getElementById('submit-button');
  if (submit) submit.textContent = t["nextTask"] || "Next Task";

  // Add more elements as needed
}
window.renderTaskLang = renderTaskLang; // <-- Make it global
window.addEventListener('languageChanged', renderTaskLang);
document.addEventListener("DOMContentLoaded", renderTaskLang);


// // Try to get language from localStorage first
// const LANG = localStorage.getItem("lang") || (navigator.language || "en").slice(0, 2);
// const T = TRANSLATIONS[LANG] || TRANSLATIONS.en;


// Get principle from URL, default to 'closure'
function getPrinciple() {
  const params = new URLSearchParams(window.location.search);
  return params.get('principle') || 'closure';
}

const PRINCIPLE = getPrinciple();

// Map principle to display name in multiple languages
const PRINCIPLE_DISPLAY = {
  closure: {
    en: "Closure",
    zh: "闭合",
    de: "Geschlossenheit"
  },
  proximity: {
    en: "Proximity",
    zh: "接近性",
    de: "Nähe"
  },
  similarity: {
    en: "Similarity",
    zh: "相似性",
    de: "Ähnlichkeit"
  },
  continuity: {
    en: "Continuity",
    zh: "连续性",
    de: "Kontinuität"
  },
  symmetry: {
    en: "Symmetry",
    zh: "对称性",
    de: "Symmetrie"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // --- Principle Title Panel (top left) ---
  let titleDiv = document.getElementById("principle-title");
  if (!titleDiv) {
    titleDiv = document.createElement("div");
    titleDiv.id = "principle-title";
    document.body.appendChild(titleDiv);
  }
  // // Use the translated principle name
  // const principleName = (PRINCIPLE_DISPLAY[PRINCIPLE] && PRINCIPLE_DISPLAY[PRINCIPLE][LANG]) || PRINCIPLE;
  // titleDiv.textContent = `${T.principle}: ${principleName}`;
  // titleDiv.style.position = "fixed";
  // titleDiv.style.top = "16px";
  // titleDiv.style.left = "16px";
  // titleDiv.style.zIndex = "9998";
  // titleDiv.style.background = "#fff";
  // titleDiv.style.border = "1px solid #ccc";
  // titleDiv.style.borderRadius = "8px";
  // titleDiv.style.boxShadow = "0 2px 8px #0001";
  // titleDiv.style.padding = "8px 18px";
  // titleDiv.style.fontSize = "1.2em";
  // titleDiv.style.fontWeight = "bold";
  // titleDiv.style.color = "#1976d2";
  // titleDiv.style.maxWidth = "320px";
  // titleDiv.style.whiteSpace = "nowrap";
  // titleDiv.style.overflow = "hidden";
  // titleDiv.style.textOverflow = "ellipsis";

  // // --- Language Switcher Button (top right) ---
  // const langSwitcher = document.createElement("div");
  // langSwitcher.style.position = "fixed";
  // langSwitcher.style.top = "16px";
  // langSwitcher.style.right = "16px";
  // langSwitcher.style.zIndex = "9999";
  // langSwitcher.style.background = "transparent";
  // langSwitcher.style.border = "none"; // No outline
  // langSwitcher.style.borderRadius = "8px";
  // langSwitcher.style.boxShadow = "none";
  // langSwitcher.style.padding = "6px 24px";
  // langSwitcher.style.display = "flex";
  // langSwitcher.style.alignItems = "center";
  // langSwitcher.style.fontSize = "1em";
  // langSwitcher.style.gap = "0";

  // const label = document.createElement("span");
  // label.textContent = "🌐";
  // langSwitcher.appendChild(label);


  // // Add "Back to Home" button
  // const homeBtn = document.createElement("button");
  // homeBtn.textContent = "🏠 Home";
  // homeBtn.style.background = "none";
  // homeBtn.style.color = "#1976d2";
  // homeBtn.style.border = "none";
  // homeBtn.style.outline = "none";
  // homeBtn.style.fontFamily = "'Montserrat', Arial, sans-serif";
  // homeBtn.style.fontWeight = "700";
  // homeBtn.style.fontSize = "1em";
  // homeBtn.style.cursor = "pointer";
  // homeBtn.style.padding = "0 10px 0 0";
  // homeBtn.style.marginRight = "12px";
  // homeBtn.style.transition = "color 0.2s";
  // homeBtn.onmouseenter = () => homeBtn.style.color = "#ff9800";
  // homeBtn.onmouseleave = () => homeBtn.style.color = "#1976d2";
  // homeBtn.onclick = () => window.location.href = "index.html";
  // langSwitcher.appendChild(homeBtn);

  // const langs = [
  //   { code: "en", label: "en" },
  //   { code: "zh", label: "中文" },
  //   { code: "de", label: "de" }
  // ];


  // langs.forEach(({ code, label }, idx) => {
  //   const btn = document.createElement("button");
  //   btn.textContent = label;
  //   btn.style.background = "none";
  //   btn.style.color = code === LANG ? "#ff9800" : "#0077ff";
  //   btn.style.border = "none";
  //   btn.style.outline = "none";
  //   btn.style.fontFamily = "'Montserrat', Arial, sans-serif";
  //   btn.style.fontWeight = "700";
  //   btn.style.fontSize = "1em";
  //   btn.style.cursor = "pointer";
  //   btn.style.padding = "0 4px";
  //   btn.style.transition = "color 0.2s";
  //   btn.className = "lang-btn";
  //   if (code === LANG) btn.classList.add("active");
  //   btn.onclick = () => setLanguage(code);

  //   btn.onmouseenter = () => btn.style.color = "#ff9800";
  //   btn.onmouseleave = () => btn.style.color = code === LANG ? "#ff9800" : "#0077ff";

  //   langSwitcher.appendChild(btn);

  //   // Add separator except after the last button
  //   if (idx < langs.length - 1) {
  //     const sep = document.createElement("span");
  //     sep.textContent = "|";
  //     sep.className = "lang-sep";
  //     sep.style.color = "#888";
  //     sep.style.padding = "0 2px";
  //     sep.style.userSelect = "none";
  //     langSwitcher.appendChild(sep);
  //   }
  // });

  // document.body.appendChild(langSwitcher);
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
submitBtn.innerText = T.nextTask;

const progressBar = document.getElementById("progress-bar");
const taskCounter = document.getElementById("task-counter");

const downloadBtn = document.createElement("button");
downloadBtn.innerText = T.downloadResults;
downloadBtn.style.display = "none";
downloadBtn.onclick = () => {
  const feedbackText = document.getElementById('user-feedback')?.value || "";
  // Save both the principle and the results in the JSON file
  const output = {
    principle: PRINCIPLE,
    results: taskResults,
    feedback: feedbackText
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
    taskCounter.textContent = `${T.task} ${index + 1} / ${total}`;
  }
}

function updateTaskIdDisplay(taskId) {
  const taskIdDiv = document.getElementById("task-id");
  if (taskIdDiv) {
    taskIdDiv.textContent = T.taskId.replace("{id}", taskId);
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
  trainLabel.innerText = T.trainingImages;
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
  testLabel.innerText = T.testImages;
  testLabel.className = "test-title";
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
  hardnessText.innerText = T.hardnessPrompt;
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
  easyBtn.innerText = T.easy;
  easyBtn.style.padding = "24px 48px";
  easyBtn.style.fontSize = "2em";
  easyBtn.style.borderRadius = "16px";
  easyBtn.style.cursor = "pointer";
  setBtnState(easyBtn, "easy", taskHardness[currentTaskIndex] === "easy");

  // Hard Button
  const hardBtn = document.createElement("button");
  hardBtn.innerText = T.hard;
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
  [T.task, T.imageId, T.selected, T.isPositive, T.correct, T.timeTaken].forEach(text => {
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
      feedback = T.feedbackGreat;
    } else if (percent >= 0.7) {
      feedback = T.feedbackNice;
    } else if (percent >= 0.5) {
      feedback = T.feedbackTricky;
    } else {
      feedback = T.feedbackChallenging;
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
      ${T.yourPerformance}<br>
      <span style="font-size:1.2em;">${T.correctCount.replace("{correct}", correct).replace("{total}", total.length)}</span>
    </div>
    <div style="font-size: 1.5em; margin-bottom: 20px; color: #388e3c; text-align: center;">
      ${feedback}
    </div>
    <div style="font-size: 1.3em; margin-bottom: 18px; text-align: center;">
      ${T.completedTasks.replace("{count}", TASK_COUNT)}
    </div>
    <div style="margin: 24px 0 12px 0; width: 100%; max-width: 480px;">
      <label for="user-feedback" style="font-size:1.1em; color:#1976d2; font-weight:600;">
        📝 Your feedback (optional):
      </label>
      <textarea id="user-feedback" rows="3" style="width:100%; margin-top:8px; border-radius:8px; border:1px solid #bdbdbd; padding:8px; font-size:1em; resize:vertical;"></textarea>
    </div>
    <div style="display: flex; gap: 24px; margin-top: 32px;">
      <button id="download-results-btn" style="padding: 14px 32px; font-size: 1.1em; background: #0077ff; color: #fff; border: none; border-radius: 8px; cursor: pointer; transition: background 0.2s;">
        ${T.downloadResultsBtn}
      </button>
      <button id="upload-results-btn" style="padding: 14px 32px; font-size: 1.1em; background: #43a047; color: #fff; border: none; border-radius: 8px; cursor: pointer; transition: background 0.2s;">
        ${T.uploadResultsBtn}
      </button>
      <button id="more-tests-btn" style="padding: 14px 32px; font-size: 1.1em; background: #0077ff; color: #fff; border: none; border-radius: 8px; cursor: pointer; transition: background 0.2s;">
        ${T.moreTestsBtn}
      </button>
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
        const feedbackText = document.getElementById('user-feedback')?.value || "";
        const output = {
          principle: PRINCIPLE,
          results: taskResults,
          feedback: feedbackText
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