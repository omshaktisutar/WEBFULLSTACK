function sayhello() {
  console.log("Hello, World!");
}
sayhello();
//parameterized function
function add(a,b){
  return a + b;
}
add(5,10);
console.log(add(5,10));
//task
function multiply(x,y){
  return x * y;
}
console.log(multiply(5,10));
//task2
//unlimited arguements
function sumAll(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}