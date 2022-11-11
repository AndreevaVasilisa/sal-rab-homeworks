function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message = productName; 
        message = message + " ";
        message = message + "за";
        message = message + " ";

        message = message + productPrice;
        message = message + " ";
        message = message + "теперь в корзине!";

    return message;
}
console.log(addInCartMessage("Телефон", "2000"));

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue = oldValue;
        newValue = newValue + 1;

    return newValue;
}

console.log(addInCartCountChange(1));

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum = oldSum + difference;
    let newSumText = newSum + " ₽";
    newSumText = `${newSum} ₽`;

    // Конец решения задания №1.3.

    return newSumText;
}

console.log(addInCartSumChange(2000, 199))