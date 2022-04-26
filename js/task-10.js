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

btnCreateRef.addEventListener("click", () => {
  let amount = Number(inputRef.value);

  let newElements = [];
  for (let i = Number(inputRef.min); i <= amount; i += Number(inputRef.step)) {
    const newElement = 
    `<div class="cub" width="30px" height="30px" background-color="${getRandomHexColor()}"></div>`;

    // алгоритм изменения размеров
    // if(i !== 1){
    //   console.log("!==1");
    
    // }
    newElements.push(newElement);
  }

  const markup = newElements.join("");
  console.log(markup);
  boxesRef.insertAdjacentHTML("beforeend", markup);
  console.log(boxesRef);
})

// Удаляет все элементы внутри boxesRef
btnDestroyRef.addEventListener("click", ()=> {boxesRef.innerHTML = "";