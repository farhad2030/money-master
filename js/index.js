const incomeField = document.getElementById("incomeField");
const foodField = document.getElementById("foodField");
const rentField = document.getElementById("rentField");
const clothField = document.getElementById("clothField");
const saveField = document.getElementById("incomeField");

let incomeValue = 0;
let foodValue = 0;
let rentValue = 0;
let colothValue = 0;
let saveValue = 0;

incomeField.addEventListener("keyup", function (event) {
  getInput(event.target, event.target.value, "income");
});

foodField.addEventListener("keyup", function (event) {
  getInput(event.target, event.target.value, "food");
});
rentField.addEventListener("keyup", function (event) {
  getInput(event.target, event.target.value, "rent");
});
clothField.addEventListener("keyup", function (event) {
  getInput(event.target, event.target.value, "cloth");
});

function getInput(elment, value, type) {
  eval(type + "Value" + " = " + value + ";");

  let parentOfField = elment.parentNode;

  let nodelist = parentOfField.childNodes;

  if (typeof incomeValue != "number") {
    nodelist[5].innerText = "Must type number";
  } else if (incomeValue < 0) {
    nodelist[5].innerText = "Must type positive";
  } else {
    nodelist[5].innerText = "";
    eval(type + "Value" + " = " + value + ";");
  }
  console.log(eval(type + "Value" + " = " + value + ";"));
}
