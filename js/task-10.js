// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");

const btnCreateRef = document.querySelector('button[data-create]');

const btnDestroyRef = document.querySelector('button[data-destroy]');

const boxesRef = document.querySelector("#boxes");

// // // Создание коллекции элементов Вариант 1(с помощью createElement. !!! Особенности: ф-я getRandomHexColor выдает значение для background-color в формате RGB)
// function createBoxes(amount) {
  
//     amount = Number(inputRef.value);

//   boxesRef.classList.add("unit");

//   let newElements = [];
//   for (let i = Number(inputRef.min); i <= amount; i += Number(inputRef.step)) {
    
//     const newElement = document.createElement("div");
//     const size = 20 + i * 10;
//     newElement.style.width = `${size}px`;
//     newElement.style.height = `${size}px`;
//     newElement.style.backgroundColor = getRandomHexColor();
//     newElement.classList.add("square");
//     newElements.push(newElement);
//   }
//   boxesRef.append(...newElements);
// }

// // Создание коллекции элементов Вариант 2 (с помощью insertAdjacentHTML. !!! Особенности: ф-я getRandomHexColor выдает значение для background-color в формате HEX. !!! Все стили записываются внутрь style в в шаблонной строке)
function createBoxes(amount) {
  
    amount = Number(inputRef.value); 

  boxesRef.classList.add("unit");

  let newElements = [];
  let size = 30;
  for (let i = Number(inputRef.min); i <= amount; i += Number(inputRef.step)) {
    
    const newElement = `<div class="square" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
;
    size += 10;
    newElements.push(newElement);
  }
  const markup = newElements.join("");
  boxesRef.insertAdjacentHTML("beforeend", markup);
}

btnCreateRef.addEventListener("click", createBoxes);

// Удаляет все элементы внутри boxesRef и убирает класс стилизации родительского элемента
function destroyBoxes(){
  boxesRef.innerHTML = "";
    boxesRef.classList.remove("unit");
}

btnDestroyRef.addEventListener("click", destroyBoxes);

