let remainingBalance = 0;

const userName = document.getElementById("username");
const budget = document.getElementById("weekly-budget");
const btn1 = document.getElementById("form1-btn");

let pmtAmt = document.getElementById("pmt-amt");
let pmtType = document.getElementById("pmt-type");
let pmtDay = document.getElementById("pmt-day");
const btn2 = document.getElementById("form2-btn");

const userLi = document.getElementById("userList");
const expList = document.getElementById("expenseList");
//maybe having everything defined at the very top here will help us simplify and locate information

btn1.addEventListener("click", (event) => {
  event.preventDefault();
  const userObject = document.createElement("li");
  userObject.innerText = `Hi, ${userName.value} your budget is $${budget.value} for the week.`;
  remainingBalance = budget.value;
  userLi.append(userObject);
});
//add an li to the ul here for reported user
// add error for weekly budget amount

btn2.addEventListener("click", (event) => {
  event.preventDefault();
  let totalSpent = 0;
  const expObject = document.createElement("li");
  if (remainingBalance > 1) {
    totalSpent += pmtAmt.value;
    remainingBalance -= totalSpent;
    expObject.innerText = `You paid $${pmtAmt.value} on ${pmtDay.value} for ${pmtType.value}. Your remaining balance is ${remainingBalance}!!`;
  } else {
    expObject.innerText = `You're out of money:(!`;
  }

  // fix conditional for remaining balance < 0;

  expList.append(expObject);
});
//add an li to the ul here for each payment reported

// variable
let expenses = 0;
