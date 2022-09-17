const categories = document.querySelectorAll('li.item');
const quantityCategories = categories.length;
console.log(`Number of categories: ${quantityCategories}`);
console.log('');

categories.forEach(category => {
  const titleOfCategory = category.firstElementChild.textContent;
  const quantityOfElements = category.lastElementChild.children.length;
  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${quantityOfElements}`);
  console.log('');
  //   console.log(category);
});
