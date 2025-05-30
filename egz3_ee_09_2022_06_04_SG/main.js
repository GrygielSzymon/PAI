const update = document.querySelectorAll(".update");
const order = document.querySelectorAll(".order");
const type = document.querySelectorAll(".type")
const amount = document.querySelectorAll(".amount");

let orderN = 0;

function checkColor() {
    amount.forEach((element) => {
        if (element.textContent == 0) {
            element.style.backgroundColor = "Red";
        }
        else if (element.textContent >= 1 && element.textContent <= 5) {
            element.style.backgroundColor = "Yellow";
        }
        else {
            element.style.backgroundColor = "Honeydew";
        }
    });
}

update.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        const newValue = window.prompt("Podaj nową ilość: ");
        amount[index].textContent = newValue;
        checkColor();
    });
});

order.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        orderN++;
        window.alert(`Zamówienie nr: ${orderN} Produkt: ${type[index].textContent}`);
    });
});

checkColor();