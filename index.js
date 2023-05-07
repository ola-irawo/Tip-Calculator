const billInput = document.querySelector("div.bill-container input");
const tipInput = document.querySelector("div.total-tip input");
const totalPeople = document.querySelector("div.total-person span");
const decrease = document.querySelector("div.total-person #decrease");
const increase = document.querySelector("div.total-person #increase");
const totalAmount = document.querySelector("div.total-amount div");

let numberOfPeople = Number(totalPeople.innerText)

const calculateBill = () => {
    const bill = +billInput.value;
    const tipPercent = +tipInput.value / 100 * bill;
    const total = tipPercent + bill;
    const totalPerPerson = total / numberOfPeople;

    totalAmount.innerText = `$${totalPerPerson.toLocaleString("en-Us")}`
}

tipInput.addEventListener("input", calculateBill)

increase.onclick = () => {
    numberOfPeople++
    totalPeople.innerText = numberOfPeople
    calculateBill()
}

const err = document.querySelector("div.error");
const hideErr = document.querySelector(".hide");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = () => {
    err.classList.add("hide")
}

decrease.onclick = () => {
    if(numberOfPeople <=1 ){
        err.classList.remove("hide")
        setTimeout(() => {
            err.classList.add("hide")
        }, 3000);
        return;
    }
    numberOfPeople--
    totalPeople.innerText = numberOfPeople
    calculateBill()
}