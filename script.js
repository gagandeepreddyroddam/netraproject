function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

// Update the time every second
setInterval(updateCurrentTime, 1000);

// Initial update
updateCurrentTime();