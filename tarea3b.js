//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.



document.querySelector('#mensaje2').onclick = function(event){

    compararEdades();

    event.preventDefault();
}

function compararEdades(){

    const $edad = document.querySelector('#edad');
    const edad = Number($edad.value);

    const $recibidor2 = document.querySelector('#recibidor2');
    const miEdad = 31;

    console.log(edad, miEdad);

   let respuesta;

    if (edad > miEdad) {
        respuesta = "Sos mayor que yo";   
    } else if (edad < miEdad) {
        respuesta = "Sos menor que yo";
    } else {
        respuesta = "Tenemos la misma edad campeón";
    };

    $recibidor2.placeholder = respuesta;

}


document.querySelector('#reset2').onclick = function(event){

    resetearCampos2();

    event.preventDefault();
}

function resetearCampos2(){

    const $edad = document.querySelector('#edad');
    const $recibidor2 = document.querySelector('#recibidor2');

    $edad.value = '';
    $recibidor2.placeholder = "Texto Secreto";

}