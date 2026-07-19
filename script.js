const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
    const instances = Number(document.getElementById("instances").value);
    const hourlyCost = Number(document.getElementById("hourlyCost").value);
    const hours = Number(document.getElementById("hours").value);

    if (instances <= 0 || hourlyCost < 0 || hours <= 0 || hours > 24) {
        alert("Please enter valid values.");
        return;
    }

    const dailyCost = instances * hourlyCost * hours;
    const monthlyCost = dailyCost * 30;

    document.getElementById("dailyCost").textContent =
        `$${dailyCost.toFixed(2)}`;

    document.getElementById("monthlyCost").textContent =
        `$${monthlyCost.toFixed(2)}`;
});