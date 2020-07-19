//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//RESOLUCIÓN TAREA C

document.querySelector('#mensaje3').onclick = function(event){

    todoDeUna();

    event.preventDefault();
}

function todoDeUna(){

    const $form = document.querySelector('#formulario');
    const $dni = $form.dni.value;
    const $age = $form.age.value;

    let acumulador;

    if ($dni == "si" && $age =="si"){
        acumulador = 'Podes entrar al bar';
    }else{
        acumulador = 'No podes entrar al bar';
    }

    const $final = $form.recibidor3;
    $final.placeholder = acumulador;
    console.log($final);
}

document.querySelector('#reset3').onclick = function(event){

    resetearCampos3();

    event.preventDefault();
}

function resetearCampos3(){

    const $form = document.querySelector('#formulario');
    const $final = $form.recibidor3;
    const $dni1 = document.querySelector('#dni1');
    const $dni2 = document.querySelector('#dni2');
    const $age1 = document.querySelector('#age1');
    const $age2 = document.querySelector('#age2');

    $final.placeholder = "Texto Secreto";

    $dni1.checked = false;
    $dni2.checked = false;
    $age1.checked = false;
    $age2.checked = false;

}