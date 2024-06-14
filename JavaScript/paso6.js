/*Agregar   elementos   al   árbol   del   DOM   usando losmétodosdocument.createElement(), appendChild() y
 haciendo uso de la propiedad textContent. */

let lista = document.createElement("ul");
document.body.appendChild(lista);

let elemento1 = document.createElement("li");
elemento1.textContent = "flor";
lista.appendChild(elemento1);

let elemento2  = document.createElement("li");
elemento2.textContent = "jaguar";
lista.appendChild(elemento2);