const BASE_URL = "https://huggingface.co/datasets/akweury/ELVIS/resolve/main/closure";
const TRAIN_API = "https://huggingface.co/api/datasets/akweury/ELVIS/tree/main/closure/train";
const TEST_API = "https://huggingface.co/api/datasets/akweury/ELVIS/tree/main/closure/test";
const TASK_COUNT = 3; // Number of demo tasks to show

let trainFolders = [];
let testFolders = [];
let selectedTasks = [];
let demoPairs = [];
let currentDemoIndex = 0;

async function fetchFolders(apiUrl) {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data.filter(item => item.type === "directory").map(item => item.path.split("/").pop());
}
async function fetchFiles(apiUrl, folder, type = "") {
  const url = `${apiUrl}/${folder}${type ? "/" + type : ""}`;
  const res = await fetch(url);
  const data = await res.json();
  // Only include .png files, exclude .json files
  return data
    .filter(item => item.type === "file" && item.path.endsWith('.png'))
    .map(item => item.path.split("/").slice(-2).join("/"));
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function generateDemoPairs(n) {
  trainFolders = await fetchFolders(TRAIN_API);
  testFolders = await fetchFolders(TEST_API);

  const minLen = Math.min(trainFolders.length, testFolders.length);
  const pairs = trainFolders.slice(0, minLen).map((name, i) => ({ train: name, test: testFolders[i] }));
  return shuffle(pairs).slice(0, n);
}

async function getDemoTask({ train, test }) {
  const pos = (await fetchFiles(TRAIN_API, train, "positive")).slice(0, 3);
  const neg = (await fetchFiles(TRAIN_API, train, "negative")).slice(0, 3);
  const testPos = (await fetchFiles(TEST_API, test, "positive")).slice(0, 3);
  const testNeg = (await fetchFiles(TEST_API, test, "negative")).slice(0, 3);

  const trainPos = pos.map((file, i) => ({
    id: `${train}_train_pos_${i}`,
    url: `${BASE_URL}/train/${train}/${file}`,
    isPositive: true,
    row: "train"
  }));

  const trainNeg = neg.map((file, i) => ({
    id: `${train}_train_neg_${i}`,
    url: `${BASE_URL}/train/${train}/${file}`,
    isPositive: false,
    row: "train"
  }));

  const testImages = shuffle([
    ...testPos.map((file, idx) => ({
      id: `${test}_test_pos_${idx}`,
      url: `${BASE_URL}/test/${test}/${file}`,
      isPositive: true
    })),
    ...testNeg.map((file, idx) => ({
      id: `${test}_test_neg_${idx}`,
      url: `${BASE_URL}/test/${test}/${file}`,
      isPositive: false
    }))
  ]);

  return {
    id: `${train} / ${test}`,
    trainPos,
    trainNeg,
    testImages
  };
}

function updateTaskIdDisplay(taskId) {
  const taskIdDiv = document.getElementById("task-id");
  if (taskIdDiv) {
    taskIdDiv.textContent = `Task ID: ${taskId}`;
  }
}

function displayDemoTask(task) {
  updateTaskIdDisplay(task.id);

  // Clear and render training images
  const trainingGrid = document.getElementById("training-image-grid");
  trainingGrid.innerHTML = "";
  const trainRow = document.createElement("div");
  trainRow.className = "image-row";
  task.trainPos.forEach(({ id, url }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = id;
    img.className = "static-image thumb train-positive";
    trainRow.appendChild(img);
  });
  task.trainNeg.forEach(({ id, url }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = id;
    img.className = "static-image thumb train-negative";
    trainRow.appendChild(img);
  });
  trainingGrid.appendChild(trainRow);

  // Clear and render test images
  const testGrid = document.getElementById("image-grid");
  testGrid.innerHTML = "";
  const testRow = document.createElement("div");
  testRow.className = "image-row";
  task.testImages.forEach(({ id, url, isPositive }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = id;
    img.className =
      "selectable-image thumb" +
      (isPositive ? " train-positive" : " train-negative") +
      (isPositive ? " ground-truth" : "");
    testRow.appendChild(img);
  });
  testGrid.appendChild(testRow);
}
document.addEventListener("DOMContentLoaded", async () => {
  demoPairs = await generateDemoPairs(TASK_COUNT);
  currentDemoIndex = 0;
  const firstTask = await getDemoTask(demoPairs[currentDemoIndex]);
  displayDemoTask(firstTask);

  document.getElementById("submit-button").onclick = async () => {
    currentDemoIndex = (currentDemoIndex + 1) % demoPairs.length;
    const nextTask = await getDemoTask(demoPairs[currentDemoIndex]);
    displayDemoTask(nextTask);
  };
});
(async function initDemo() {
  selectedTasks = await generateDemoTasks(TASK_COUNT);
  displayDemoTask(selectedTasks[0]);
})();