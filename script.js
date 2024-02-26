// basic selection

const calEl = document.querySelector("button");
const billEl = document.querySelector("#bill");
const tipEl = document.querySelector("#tip");
const resultEl = document.querySelector("#result");

const calculator = () => {
    const billValue = Number(billEl.value);
    const tipValue = Number(tipEl.value);

    const billPay = (billValue * (1 + tipValue / 100));

    resultEl.textContent = billPay.toFixed(2);
};

calEl.addEventListener("click", calculator);