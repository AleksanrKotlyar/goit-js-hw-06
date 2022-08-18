const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsRefs = document.querySelector('#ingredients');
const ingredientsMarkup = [];

function createIngredientsListMarkup(ingredients = []) {
  ingredients.map(elem => {
    const item = document.createElement('li');
    item.textContent = elem;
    item.classList.add('item');
    ingredientsMarkup.push(item);
  });
  ingredientsRefs.append(...ingredientsMarkup);
}

createIngredientsListMarkup(ingredients);
