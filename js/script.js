function validateForm() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let resultElement = document.getElementById("result");
    const maxUnder = 18.5;
    const maxNormal = 25;
    const maxOver = 30;
    let rumus = (weight / (height / 100) ** 2).toPrecision(3);

    if (rumus < maxUnder) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means you are <b>UNDERWEIGHT</b>.</span>`;
    } else if (rumus >= maxUnder && rumus < maxNormal) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means you are <b>NORMAL</b>.</span>`;
    } else if (rumus >= maxNormal && rumus < maxOver) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means you are <b>OVERWEIGHT</b>.</span>`;
    } else if (rumus >= maxOver) {
        resultElement.innerHTML = `<span>Your BMI is <b>${rumus}</b> which means you are <b>OBESITY</b>.</span>`;
    }
}
