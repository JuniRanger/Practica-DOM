//si un campo de formulario name esta vacio se muestra una alerta
//devuelve falso para evitar que se envie y se redireccione a otra pagina

function validarFormulario() {
    let x = document.forms["miformulario"]["nombre"].value;
    if (x === "") {
        alert("Se debe completar el nombre");
        return false;
    }
}

/* Valida la entrada numérica que valide que la entrada sea numérica y que este en un rango 
entre 1  y 10. Para  ello  crea un input con id=”numero”, un botón de type=”button”y que 
contenga  el atributo  onclick  donde  se  le  asigne el  valor  de  la  función. Crea 
también  una  etiqueta  <p>  con id=”demo”.*/

function validarEntrada(){
    let x = document.getElementById("numero").value;
    let texto;
    if(isNaN(x) || x < 1 || x > 10){
        texto = "Entrada no valida";
    }
    else{
        texto = "Entrada correcta"
    }
    document.getElementById("ddemo").innerHTML = texto;
}