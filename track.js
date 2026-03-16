const trackId = localStorage.getItem("trackingId");

document.getElementById("trackId").innerText = trackId || "Not Available";

function goHome() {
  window.location.href = "index.html";
}
