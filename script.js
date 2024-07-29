const addBtnEl = document.getElementById("counterAdd");
const subBtnEl = document.getElementById("counterSub");
const counterDisplay = document.getElementById("counterDisplay");

let total = 0;
const limit = 20;

const totalCounterDisplay = () => {
  if (total > limit) {
    total = limit;
  }
  if (total < 0) {
    total = 0;
  }
  counterDisplay.textContent = total;
  document.body.style.setProperty(
    "background-color",
    `rgb(${(total / limit) * 225}, 64, 0 `
  );
};

addBtnEl.addEventListener("click", () => {
  total += 1;
  totalCounterDisplay();
});

subBtnEl.addEventListener("click", () => {
  total -= 1;
  totalCounterDisplay();
});

totalCounterDisplay;
