//Encuentra el elemento con el formulario con id frm1 en la
//coleccion de formularios y muestra todos los valores de los elementos

const f = document.forms["form1"];
let texto = "";
for(let i = 0; i < f.lenght; i++){
    texto += f.elements[i].value +"<br>";
}
document.getElementById("demo").innerHTML = texto;
console.log(f);