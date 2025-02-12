const messages = [
    "Segura amor?",
    "Muy segura??",
    "Estas 100% segura?",
    "Si no m qres en tu vida dsle q no",
    "Piensalo otra vez",
    "Si dices que no voy a llorar",
    "cm el gato wuwiwi",
    "Voy a estar muy muy muy triste",
    "Bueno pues",
    "DI QUE SI YAAAAAAAAA"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}