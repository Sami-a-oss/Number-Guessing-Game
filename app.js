const input = document.querySelector("input");
const submit = document.querySelector("button");
const output = document.querySelector("#output");



const genRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}
let randomValue = genRandomNumber();


const playGame = (value) => {
    let guess = Number(value);
    if (guess === randomValue) {
        output.innerText = "Congratulations! You guessed correctly";
        output.style.backgroundColor = "green";
        submit.disabled = true;
        input.disabled = true;
    } else if (guess > randomValue) {
        output.innerText = "📉 Too high! Try again.";
        output.style.backgroundColor = "red";
    } else if (guess < randomValue) {
        output.innerText = "📈 Too low! Try again.";
        output.style.backgroundColor = "red";
    }

}


submit.addEventListener("click", () => {
    let value = input.value;
    playGame(value);
});