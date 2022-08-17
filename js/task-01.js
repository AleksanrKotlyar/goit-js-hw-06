const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories:  ${categoriesRef.length}`);

categoriesRef.forEach(categories => {
  console.log(`Category:  ${categories.firstElementChild.textContent}`);
  console.log(`Elements:  ${categories.lastElementChild.children.length}`);
});
