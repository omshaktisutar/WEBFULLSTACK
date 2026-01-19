//foreach array element, log the element and its index
//arrays loop with index
const fruits = ["Apple", "Banana", "Mango"];
function print (n){
  console.log(n);
}
fruits.forEach(print);
//or
fruits.forEach((n) => {
  console.log(n);
});
//or
fruits.forEach((n, i) => {
  console.log(n, i);
});
