// Restore previous selections
window.onload = () => {

    if (localStorage.getItem("instances")) {

        document.getElementById("instances").value =
            localStorage.getItem("instances");

        document.getElementById("hourlyCost").value =
            localStorage.getItem("hourlyCost");

        document.getElementById("hours").value =
            localStorage.getItem("hours");

    }

};

// Calculate Button
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {

    const instances = Number(
        document.getElementById("instances").value
    );

    const hourlyCost = Number(
        document.getElementById("hourlyCost").value
    );

    const hours = Number(
        document.getElementById("hours").value
    );

    // Input validation
    if (
        instances <= 0 ||
        hourlyCost < 0 ||
        hours <= 0 ||
        hours > 24
    ) {
        alert("Please enter valid values.");
        return;
    }

    // Cost calculations
    const dailyCost =
        instances * hourlyCost * hours;

    const monthlyCost =
        dailyCost * 30;

    const yearlyCost =
        dailyCost * 365;

    // Display results
    document.getElementById("dailyCost").textContent =
        `$${dailyCost.toFixed(2)}`;

    document.getElementById("monthlyCost").textContent =
        `$${monthlyCost.toFixed(2)}`;

    document.getElementById("yearlyCost").textContent =
        `$${yearlyCost.toFixed(2)}`;

    // Save values
    localStorage.setItem("instances", instances);
    localStorage.setItem("hourlyCost", hourlyCost);
    localStorage.setItem("hours", hours);

});

// Dark Mode
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

});

// Restore Theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}