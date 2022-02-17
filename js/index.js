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
  getInput(event.target, event.target.value);
});

foodField.addEventListener("keyup", function (event) {
  getInput(event.target, event.target.value);
});

function getInput(elment, value) {
  incomeValue = value;
  console.log(incomeValue);

  //   // show error message
  let parentOfField = elment.parentNode;
  console.log(parentOfField);
  let nodelist = parentOfField.childNodes;
  //   console.log(nodelist[5]);
  nodelist[5].innerText = "hello";
}
