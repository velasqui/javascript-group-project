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
    };
    
    if (remainingBalance >= 0) {
        remainingBalance -= pmtAmt.value;
        remaining.innerText = `$${remainingBalance}`;
        return
    } else {
        remainingBalance -= pmtAmt.value;
        remaining.innerText = `$${remainingBalance}. You're in debt.`
    };
    
    // // PIE CHART BELOW
    const pmtCategories = ["Entertainment", "Food", "Clothes", "Bills"];
    const sliceColors = ["#dca530","#b45946","#2b5797","#9cb446"];
    const pie = document.getElementById('myChart');
    var entertainmentSlice = 0;
    var foodSlice = 0;
    var clothsSlice = 0;
    var billsSlice = 0;
    const totalTotal = entertainmentTotal + foodTotal + clothsTotal + billsTotal;
    entertainmentSlice = Math.floor((entertainmentTotal / totalTotal) * 100);
    foodSlice = Math.floor((foodTotal/ totalTotal) * 100);
    clothsSlice = Math.floor((clothsTotal / totalTotal) * 100);
    billsSlice = Math.floor((billsTotal / totalTotal) * 100);
    const sliceSizes = [entertainmentSlice, foodSlice, clothsSlice, billsSlice];
    
    // Seems like the pie chart only shows up when we go -100 in debt
    new Chart("myChart", {
        type: "pie",
        data: {
            labels: pmtCategories,
            datasets: [{
                backgroundColor: sliceColors,
                data: sliceSizes
            }]
        },
        options: {
            title: {
            display: true,
            text: "Your week's expenses:",
            //we do need to look at changing font family and font color here and I think this is where we do that, still working on that end.
            }
        }
    });
});

