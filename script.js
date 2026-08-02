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
});

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});