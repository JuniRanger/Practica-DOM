/* Usando el método addEventListener() para escuchar eventos en la página.a)Crea un botón en el documento html,
 donde al hacer click aparezca un mensaje de alerta. */
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    alert("Gracias por dar click");
});