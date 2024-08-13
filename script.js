let input = document.getElementById("input");
let btn = document.getElementById("btn");
let guessno = document.getElementById("guessno");
let wrg = document.getElementById("wrg");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let guessingnum = 0;

btn.addEventListener("click", () => {
  guessing();
});
function guessing() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrg.innerHTML = "enter a value between 1 to 100";
    input.value = "";
  } else {
    guessingnum++;
    guessno.innerHTML = "No. of Guesses:" + guessingnum;
    if (input.value > answer) {
      wrg.innerHTML = "your guess is too high";
      input.value = "";
    } else if (input.value < answer) {
      wrg.innerHTML = "guess is loo";
    } else {
      wrg.innerHTML = "congratulation! you guess the right number";
      input.value = "";
    }
  }
}
