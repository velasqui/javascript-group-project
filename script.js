const userName = document.getElementById('username');
const budget = document.getElementById('weekly-budget');
const btn1 = document.getElementById('form1-btn');

let pmtAmt = document.getElementById('pmt-amt');
let pmtType = document.getElementById('pmt-type').value;
let pmtDay = document.getElementById('pmt-day').value;
const btn2 = document.getElementById('form2-btn');

const userLi = document.getElementById('userList');
const expList = document.getElementById('expenseList');
//maybe having everything defined at the very top here will help us simplify and locate information

btn1.addEventListener('click', (event) => {
        event.preventDefault();
        const userObject = document.createElement('li');
        userObject.innerText = `Hi, ${userName.value} your budget is $${budget.value} for the week.`;

        userLi.append(userObject);
    });
//add an li to the ul here for reported user

btn2.addEventListener('click', (event) => {
        event.preventDefault();
        const expObject = document.createElement('li');
        expObject.innerText = `You paid $${pmtAmt.value} on ${pmtDay} for ${pmtType}.`;

        expList.append(expObject);//code did not like let pmtAmt = document.getElementById('pmt-amt').value;
    });
//add an li to the ul here for each payment reported