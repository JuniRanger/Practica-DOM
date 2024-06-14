//Devuelve una lista de todos los elementos p con class intro
const b = document.querySelectorAll("p.intro");

/* Encuentra todos los elementos li hijos de ul
crear lista desordenada con 5 elementos */
const listItems = document.querySelectorAll("ul > li");
console.log(listItems);

//Encontrar en la consola el primer elemento h1
const h1Element = document.querySelector("h1");
console.log(h1Element);

//Encontrar la clase list usando query selector
const list = document.querySelector(".list");
console.log("list");

//Imprimir los elementos li haciendo uso del ciclo foreach()
//para iterar sobre la nodelist e imprimir cada uno de los elementos

const listaElementos = document.querySelectorAll("ul > li");

listaElementos.forEach((item) => {
    console.log(item);
})

//uso de la propiedad style para cambiar estilos en linea css

const h1 = document.querySelector("h1");
h1.style.color = "blue";