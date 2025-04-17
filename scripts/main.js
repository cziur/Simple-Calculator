const operator = document.querySelectorAll(".operators button");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("times");
const divide = document.getElementById("divide");
const display = document.getElementById("display-text");
const digits = document.querySelectorAll(".digits button");
const calculate = document.getElementById("equals");
const clear = document.getElementById("clear");
const button = document.querySelectorAll("button");

let resultDisplayed = false;
let calcArr = [];
let operation;
let firstNumber;
let secondNumber;

function clearDisplay() {
	display.textContent = "";
}

display.textContent += "Welcome";

button.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (display.textContent === "Welcome") {
			display.textContent = "";
		}
		let currentString = display.textContent;
		let lastChar = currentString.length - 1;
		display.textContent += btn.value;
		if (btn === clear) {
			clearDisplay();
		} else if (
			btn === plus ||
			btn === minus ||
			btn === multiply ||
			btn === divide
		) {
			operation = btn.value;
			console.log(operation);
		} else if (btn === digits) {
			firstNumber = btn.value;
			console.log(firstNumber);
		}
	});
});
