const operator = document.querySelectorAll(".operators");
const display = document.querySelectorAll("h1");
const digits = document.querySelectorAll(".digits");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let calcArr = [];
let selectOp;

digits.forEach((digit) => {
	digit.addEventListener("click", (e) => {
		calcArr.push(e.target.value);
		console.log(calcArr);
		display.innerHTML = Number(calcArr.join(""));
	});
});

operator.forEach((op) => {
	op.addEventListener("click", (e) => {
		selectOp = e.target.value;
		console.log(selectOp);
	});
});
