//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

//  <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> 

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterEl = document.querySelector("#counter");
counterEl.children[1].textContent = 0;

let counterValue = counterEl.children[1].textContent;
counterValue = 0;

const btnDecrement = counterEl.firstElementChild;

const btnIncrement = counterEl.lastElementChild;

btnDecrement.addEventListener("click", ()=> {counterValue -= 1
    counterEl.children[1].textContent = counterValue;
} )

btnIncrement.addEventListener("click", ()=> {counterValue += 1
    counterEl.children[1].textContent = counterValue;
} )


