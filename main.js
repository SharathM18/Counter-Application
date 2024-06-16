import "./style.css";

const countDisplay = document.querySelector(".count-display");
const increment = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrement = document.querySelector(".decrease");
const increment2 = document.querySelector(".increase2");
const decrement2 = document.querySelector(".decrease2");

let count = 0;

countDisplay.innerHTML = 0;

increment.addEventListener("click", () => {
  count++;
  countDisplay.innerHTML = count;
});

decrement.addEventListener("click", () => {
  count--;
  countDisplay.innerHTML = count;
});

reset.addEventListener("click", () => {
  count = 0;
  countDisplay.innerHTML = 0;
});

increment2.addEventListener("dblclick", () => {
  count += 2;
  countDisplay.innerHTML = count;
});

decrement2.addEventListener("dblclick", () => {
  count -= 2;
  countDisplay.innerHTML = count;
});
