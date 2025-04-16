function calculateAge() {
    const birthYear = document.getElementById("birthYear").value;
    const currentYear = new Date().getFullYear();
  
    if (birthYear === "") {
      document.getElementById("result").innerText = "Please enter your birth year.";
    } else if (isNaN(birthYear) || birthYear.length !== 4) {
        document.getElementById("result").innerText = "You should not exist in this world";
    } else if (birthYear > currentYear) {
      document.getElementById("result").innerText = "You can't be born in the future";
    } else if (birthYear == currentYear) {
      document.getElementById("result").innerText = "You were born this year";
    } else {
      let age = currentYear - birthYear;
      document.getElementById("result").innerText = `You are ${age} years old!`;
    }
  }
  
  function resetCalculator() {
    document.getElementById("birthYear").value = "";
    document.getElementById("result").innerText = "";
  }
  
  //  How i toggle the dark and light mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  
    // Save the preference
    const isDarkMode = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode);
  }
  
  // Load the saved preference on page load
  window.addEventListener("load", () => {
    const savedMode = localStorage.getItem("darkMode");
  
    if (savedMode === "true") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.getElementById("modeSwitch").checked = true;
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      document.getElementById("modeSwitch").checked = false;
    }
  });
  