/* eslint linebreak-style: ["error", "windows"] */

const vegetables = ['Potato', 'Tomato', 'Pepper', 'Carrot', 'Cucumber'];
const fruits = ['Apple', 'Avokado', 'Apricot'];
const meat = ['beef', 'pork', 'lamb', 'chicken'];

function showFood(array) {
  array.forEach(console.log(array));
  console.log(array.length);
  return undefined;
}

showFood(vegetables);
showFood(fruits);
showFood(meat);

module.exports = showFood;
