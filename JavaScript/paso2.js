//Encuentra todos los elementos p de un html
const element = document.getElementsByName("p");

//Encuentra el elemento con id main y luego todos 
//los elementos p dentro del main

const x = document.getElementById("main");
console.log(x);

const y = x.getElementsByTagName("p");
console.log(y);