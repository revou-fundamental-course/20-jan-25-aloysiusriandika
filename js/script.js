function validateForm() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let resultElement = document.getElementById("result");
    const maxUnder = 18.5;
    const maxNormal = 25;
    const maxOver = 30;
    let rumus = (weight / (height / 100) ** 2).toPrecision(3);

    if (rumus < maxUnder) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means You are <b>UnderWeight</b></span>`;
    } else if (rumus >= maxUnder && rumus < maxNormal) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means You are <b>Normal</b></span>`;
    } else if (rumus >= maxNormal && rumus < maxOver) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means You are <b>OverWeight</b></span>`;
    } else if (rumus >= maxOver) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means You are <b>Obesity</b></span>`;
    }
}
