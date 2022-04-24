const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Напиши скрипт, который для каждого элемента массива ingredients:
// 1. Создаст отдельный элемент <li>. Обязательно используй метод document.createElement().
//2. Добавит название ингредиента как его текстовое содержимое.
//3. Добавит элементу класс item.
//4. После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientsRef = document.querySelector("#ingredients");

const createItems = ingredients.map((ingredient) => {
  const newItemEl = document.createElement("li");
  newItemEl.classList.add(".item");
  newItemEl.textContent = ingredient;

  return newItemEl;
});

ingredientsRef.append(...createItems);