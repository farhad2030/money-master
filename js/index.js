const incomeField = document.getElementById("incomeField");
const foodField = document.getElementById("foodField");
const rentField = document.getElementById("rentField");
const clothField = document.getElementById("clothField");
const saveField = document.getElementById("saveField");
const saveError = document.getElementById("saveError");
const saveAmountBox = document.getElementById("saveAmountBox");
const remainAmountBox = document.getElementById("remainAmountBox");
const saveBtn = document.getElementById("saveBtn");

let incomeValue = 0;
let foodValue = 0;
let rentValue = 0;
let clothValue = 0;
let saveValue = 0;

let incomeError = "";
let foodError = "";
let rentError = "";
let clothError = "";

let expensesValue = 0;
let balanceValue = 0;

let saveAmount = 0;
let remainAmount = 0;
let saveErrorValue = null;

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
saveField.addEventListener("keyup", function (event) {
  getSave(event.target.value);
});
saveBtn.addEventListener("click", function (event) {
  calculateSave(event.target.value);
});

function getInput(elment, value, type) {
  eval(type + "Value" + " = " + value);
  eval(type + "Error" + " = " + null);

  let parentOfField = elment.parentNode;

  let nodelist = parentOfField.childNodes;

  if (typeof eval(type + "Value") != "number") {
    nodelist[5].innerText = "Must type number";
    eval(type + "Error" + " = " + 1 + ";");
  } else if (eval(type + "Value") < 0) {
    nodelist[5].innerText = "Must type positive";
    eval(type + "Error" + " = " + 1 + ";");
  } else {
    nodelist[5].innerText = "";
    eval(type + "Value" + " = " + value + ";");
    eval(type + "Error" + " = " + null);
  }
  console.log(eval(type + "Value" + " = " + value + ";"));

  console.log(
    incomeValue + " " + foodValue + " " + rentValue + " " + clothValue
  );
  console.log(
    incomeError + " " + foodError + " " + rentError + " " + clothError
  );
}
const expenses = document.getElementById("expenses");
const balance = document.getElementById("balance");

const calculateBtn = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    if (
      incomeError != 1 &&
      foodError != 1 &&
      rentError != 1 &&
      clothError != 1
    ) {
      expensesValue = foodValue + rentValue + clothValue;
      console.log(expensesValue);

      expenses.innerText = expensesValue;
      balanceValue = incomeValue - expensesValue;
      console.log(balanceValue);
      balance.innerText = balanceValue;
    } else {
      expenses.innerText = "put valid input";
      balance.innerText = "put valid input";
    }
  });
// validate save field
function getSave(e) {
  console.log(typeof e);
  console.log(balanceValue);
  e = parseFloat(e);
  if (e < 0) {
    saveError.innerText = "Must be positive";
    saveErrorValue = 1;
  } else {
    if (balanceValue <= 0) {
      saveError.innerText = "No more balance";
      saveErrorValue = 1;
    } else {
      console.log("dfds");

      saveError.innerText = "";
      saveValue = e;
      saveErrorValue = null;
    }
  }
}

// save calculate
function calculateSave() {
  if (
    saveErrorValue == 1 &&
    incomeError == 1 &&
    foodError == 1 &&
    rentError == 1 &&
    clothError == 1
  ) {
    saveError.innerText = "No more balance";
    saveAmountBox.innerText = "No more balance";
    remainAmountBox.innerText = "No more balance";
  } else {
    saveAmount = (incomeValue * saveValue) / 100;

    console.log(saveAmount);

    if (saveAmount >= balanceValue) {
      saveError.innerText = "No more balance";
      saveAmountBox.innerText = "No more balance";
      remainAmountBox.innerText = "No more balance";
    } else {
      // console.log(typeof balance);
      // console.log(typeof saveAmount);
      saveAmountBox.innerText = saveAmount;
      remainAmount = balanceValue - saveAmount;

      remainAmountBox.innerText = remainAmount;
    }
  }
}
