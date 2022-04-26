//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");

const buttonRef = document.querySelector(".change-color");

const colorBodyRef = document.querySelector(".color");

buttonRef.addEventListener("click", changeColor);

function changeColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  
  colorBodyRef.textContent = `- ${getRandomHexColor()}`;
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;

}



