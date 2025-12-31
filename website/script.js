function showMessage() {
  document.getElementById("message").classList.remove("hidden");
}

// Optional: determine environment based on hostname
const envSpan = document.getElementById("environment");

if (location.hostname.includes("dev")) {
  envSpan.textContent = "Development";
  envSpan.style.background = "#8884ff";
} else if (location.hostname.includes("stage")) {
  envSpan.textContent = "Staging";
  envSpan.style.background = "#ffcc00";
} else if (location.hostname.includes("prod") || location.hostname.includes("www")) {
  envSpan.textContent = "Production";
  envSpan.style.background = "#28a745";
} else {
  envSpan.textContent = "Unknown";
}
