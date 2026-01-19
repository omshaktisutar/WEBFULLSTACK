  //arrays
  const fruits = ["Apple", "Banana", "Mango"];
  console.log(fruits);
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);  fruits.push("Orange"); //adding element to the array
  console.log(fruits);
  //chage value of an element
  fruits[1] = "Grapes";
  console.log(fruits);
  //length of the array
  console.log(fruits.length);
  //index of an element
  console.log(fruits.indexOf("Mango"));
  //remove last element
  fruits.pop();
  console.log(fruits);
  //remove first element
  fruits.shift();
  console.log(fruits);
  //add element at the beginning
  fruits.unshift("Strawberry");
  console.log(fruits);
  //splice
  fruits.splice(1, 1); //remove 1 element at index 1
  console.log(fruits);
  //slice
  const citrus = fruits.slice(1, 3); //from index 1 to index 3 (3 not included)
  console.log(citrus);
  //reverse
  fruits.reverse();
  console.log(fruits);
  //sort
  fruits.sort();
  console.log(fruits);
  //loop through array
  fruits.forEach((fruit) => {
      console.log(fruit);
  });
