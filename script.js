
function updateTimeAndDay() {
  const now = new Date();

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  };
  const optionsDay = { weekday: "long", timeZone: "UTC" };

  const currentTime = now.toLocaleTimeString("en-US", optionsTime);
  const currentDay = now.toLocaleDateString("en-US", optionsDay);

  document.getElementById("timeOfTheDay").textContent = currentTime;
  document.getElementById("dayOfWeek").textContent = currentDay;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
