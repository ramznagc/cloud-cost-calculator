const instanceSelect =
    document.getElementById("instance");

const instancesInput =
    document.getElementById("instances");

const hoursInput =
    document.getElementById("hours");

const calculateBtn =
    document.getElementById("calculateBtn");


function calculateCost() {

    const hourlyCost =
        Number(instanceSelect.value);

    const instances =
        Number(instancesInput.value);

    const hours =
        Number(hoursInput.value);


    if (
        instances <= 0 ||
        hours <= 0 ||
        hours > 24
    ) {
        alert(
            "Please enter valid values."
        );

        return;
    }


    const dailyCost =
        hourlyCost *
        instances *
        hours;


    const monthlyCost =
        dailyCost * 30;


    const yearlyCost =
        dailyCost * 365;


    document.getElementById(
        "dailyCost"
    ).textContent =
        `$${dailyCost.toFixed(2)}`;


    document.getElementById(
        "monthlyCost"
    ).textContent =
        `$${monthlyCost.toFixed(2)}`;


    document.getElementById(
        "yearlyCost"
    ).textContent =
        `$${yearlyCost.toFixed(2)}`;
}


calculateBtn.addEventListener(
    "click",
    calculateCost
);


calculateCost();