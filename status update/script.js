// Simulate progress
let progress = 0;
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const statusMessage = document.getElementById("statusMessage");

const interval = setInterval(() => {
  if (progress < 100) {
    progress += 5;
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "% Complete";
    statusMessage.textContent = "Downloading... " + progress + "%";
  } else {
    clearInterval(interval);
    statusMessage.textContent = "✅ Download Complete!";
  }
}, 500);
