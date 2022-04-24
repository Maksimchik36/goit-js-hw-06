// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.

// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector("input");

const dataLength = Number(inputEl.dataset.length);

const changeClass = ()=>{
    if (inputEl.value.length === dataLength){
        console.log("Равны");
        inputEl.classList.add("valid");
        if(inputEl.classList.contains("invalid")){
            inputEl.classList.remove("invalid");
        } 
    } else {
        console.log("Не равны");
        inputEl.classList.add("invalid");
        if(inputEl.classList.contains("valid")){
            inputEl.classList.remove("valid");
        }
    } 
}

inputEl.addEventListener("blur", changeClass);


