// Function to run when the page loads
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Update the Copyright Year automatically
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // 2. Dynamic Greeting based on time of day
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let message = "Welcome to Duwe Coffee!";

    if (hour < 12) {
        message = "Good Morning! Start your day with us.";
    } else if (hour < 18) {
        message = "Good Afternoon! Need a caffeine boost?";
    } else {
        message = "Good Evening! Fuel for your night study.";
    }

    greetingElement.textContent = message;

    // 3. Simple Console Log to check if JS is connected
    console.log("Duwe Coffee Shop script loaded successfully.");
});