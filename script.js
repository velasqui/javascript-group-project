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
const remaining = document.getElementById('remaining');
const welcomePage = document.getElementById('welcome-page');
const restOfPage = document.getElementById('rest-of-page');

const pmtTypes = ["Entertainment", "Food", "Clothes", "Bills"];
const sliceSizes = [entertainmentSlice, foodSlice, clothsSlice, billsSlice];
const sliceColors = ["#dca530","#b45946","#2b5797","#9cb446"];
const pie = document.getElementById('piechart');
const totalTotal = entertainmentTotal + foodTotal + clothsTotal + billsTotal;
//*********Accessed variables above*********//


//*****Form 1 Button Event*****//

btn1.addEventListener("click", (event) => {
    event.preventDefault();
    
    if (budget.value === '') {
        window.alert('Please input weekly budget.');
        return;
    };
    
    const userObject = document.createElement("p");
    userObject.innerText = `Hi ${userName.value}, your budget is $${budget.value} for the week.`;
    remainingBalance = budget.value;
    userLi.append(userObject);
    remaining.innerText = `$${remainingBalance}`;
    btn1.style.display = 'none';
    restOfPage.style.display = 'flex';
    welcomePage.style.display = 'none';
    
    
});


//*****Form 2 Button Event*****//

btn2.addEventListener("click", (event) => {
    event.preventDefault();

    
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
    
    if (remainingBalance > 0) {
        remainingBalance -= pmtAmt.value;
        remaining.innerText = `$${remainingBalance}`;
        return
    } else {
        remainingBalance -= pmtAmt.value;
        remaining.innerText = `$${remainingBalance}. You're in debt.`
    };

    // PIE CHART BELOW
    let entertainmentSlice = (entertainmentTotal / totalTotal) * 100;
    let foodSlice = (foodTotal/ totalTotal) * 100;
    let clothsSlice = (clothsTotal / totalTotal) * 100;
    let billsSlice = (billsTotal / totalTotal) * 100;

    new Chart("myChart", {
        type: "pie",
        data: {
        labels: pmtTypes,
        datasets: [{
            backgroundColor: sliceColors,
            data: sliceSizes
            }]
        },
        options: {
         title: {
            display: true,
            text: "Your week's expenses:"
            //we do need to look at changing font family and font color here and I think this is where we do that, still working on that end.
            }
        }
    });
});
