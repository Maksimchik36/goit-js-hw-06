// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputRef = document.querySelector("#name-input");

const greetRef = document.querySelector("#name-output");

const nameDefault = greetRef.textContent;

const enterName = inputRef.addEventListener("input", ()=>{
    greetRef.textContent = inputRef.value;
    if(inputRef.value === ""){
    greetRef.textContent = nameDefault;
   }
})