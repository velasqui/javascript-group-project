let remainingBalance = 0;
let entertainmentTotal = 0;
let foodTotal = 0;
let clothsTotal = 0;
let billsTotal = 0;

const userName = document.getElementById("username");
const budget = document.getElementById("weekly-budget");
const btn1 = document.getElementById("form1-btn");

let pmtAmt = document.getElementById("pmt-amt");
let pmtType = document.getElementById("pmt-type");
let pmtDay = document.getElementById("pmt-day");
const btn2 = document.getElementById("form2-btn");

const userLi = document.getElementById("userList");
const expList = document.getElementById("expenseList");
const entertainment = document.getElementById('entTotal');
const food = document.getElementById('foodTotal');
const cloths = document.getElementById('clothTotal');
const bills = document.getElementById('billsTotal');
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
    const expObject = document.createElement("div");
    if (remainingBalance > 1) {
        totalSpent += pmtAmt.value;
        remainingBalance -= totalSpent;
        expObject.innerText = `You paid $${pmtAmt.value} on ${pmtDay.value} for ${pmtType.value}. Your remaining balance is $${remainingBalance}!!`;
    } else {
        expObject.innerText = `You're out of money:(!`;
    }
    
    // fix conditional for remaining balance < 0;
    
    expList.append(expObject);
    
    
    if (pmtType.value === 'Entertainment') {
        entertainmentTotal += Number(pmtAmt.value);
        entertainment.innerText = `Entertainment total: $${entertainmentTotal}.`;
    } else if (pmtType.value === 'Food') {
        foodTotal += Number(pmtAmt.value);
        food.innerText = `Food total: $${foodTotal}.`;
    } else if (pmtType.value === 'Clothing') {
        clothsTotal += Number(pmtAmt.value);
       cloths.innerText = `Clothing total: $${clothsTotal}.`;
    } else if (pmtType.value === 'Bills') {
        billsTotal += Number(pmtAmt.value);
        bills.innerText = `Bills total: $${billsTotal}.`;
    }

});
//add an li to the ul here for each payment reported
