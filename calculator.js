const themeChange = document.querySelector("#themeChangeInput");
const resultTxt = document.querySelector(".resultTxt");
const btns = document.querySelectorAll(".btn-num");
const calculatorOut = document.querySelector(".calculator");
const calculatorTheme = document.querySelector(".calculator-theme");
const calculatorBtns = document.querySelector(".calculator-btns");
const calculatorBtn = document.querySelector(".calculator-btns button");
themeChange.addEventListener("input", function () {
  const themeValue = themeChange.value;

  calculatorOut.classList.remove("dark-theme", "white-theme", "purple-theme");
  calculatorTheme.classList.remove("dark-head","white-head", "purple-head");
  themeChange.classList.remove("dark-input","white-input","purple-input")
  resultTxt.classList.remove("dark-result","white-result","purple-result")
  calculatorBtns.classList.remove("dark-btns","white-btns","purple-btns");
  calculatorBtn.classList.remove("dark-btn","white-btn","purple-btn");


  if (themeValue === "1") {
    calculatorOut.classList.add("dark-theme");
  } 
  
  
  else if (themeValue === "2") {
    calculatorOut.classList.add("white-theme");
    calculatorTheme.classList.add("white-head");
    themeChange.classList.add("white-input");
    resultTxt.classList.add("white-result")
    calculatorBtns.classList.add("white-btns");
    calculatorBtn.classList.add("white-btn");
  } 
  
  
  else if (themeValue === "3") {
    calculatorOut.classList.add("purple-theme");
    calculatorTheme.classList.add("purple-head");
    themeChange.classList.add("purple-input");
    resultTxt.classList.add("purple-result")
    calculatorBtns.classList.add("purple-btns");
    calculatorBtn.classList.add("purple-btn")
  }
});

function handleClick() {
  resultTxt.innerText += this.innerText;
}
for (const btn of btns) {
  btn.addEventListener("click", handleClick);
}
function handleReset() {
  resultTxt.innerText = "";
}
document.querySelector(".btn-reset").addEventListener("click", handleReset);

function handleDelete() {
  resultTxt.innerText = resultTxt.innerText.substring(
    0,
    resultTxt.innerText.length - 1
  );
}
document.querySelector(".btn-del").addEventListener("click", handleDelete);
function handleCalculate() {
  try {
    resultTxt.innerText = eval(resultTxt.innerText);
  } catch {
    alert("Eksik işlem var");
  }
}
document
  .querySelector(".btn-calculate")
  .addEventListener("click", handleCalculate);
