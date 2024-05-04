// Get greeting message based on time
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
  
    if (hour < 12) {
      return "Good morning, Dzar!";
    } else if (hour < 18) {
      return "Good afternoon, Zaki!";
    } else {
      return "Good evening, Fazluri!";
    }
  }
  
  // Update greeting and date-time every second
  function updateDateTime() {
    const greeting = document.getElementById("greeting");
    const datetime = document.getElementById("datetime");
  
    setInterval(function() {
      const now = new Date();
      greeting.textContent = getGreeting();
      datetime.textContent = now.toLocaleString();
    }, 1000);
  }
  
  // Call updateDateTime function when the page loads
  window.onload = updateDateTime;
  