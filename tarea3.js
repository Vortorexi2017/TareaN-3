// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


//RESOLUCIÓN TAREA A

document.querySelector('#mensaje').onclick = function(event){

    compararNombre();

    event.preventDefault();
}

function compararNombre(){

    const minNombre = 'victor';
    const $tuNombre = document.querySelector('#nombre');
    const tuNombre = $tuNombre.value.toLowerCase();

    const $listaNombres = document.querySelector('select');
    const listaNombres = $listaNombres.value;

    const $recibidor = document.querySelector('#recibidor');
    const recibidor = $recibidor.value;
    let msgA;

    if (tuNombre == minNombre){
        msgA = `Hey ${tuNombre} somos tocayos`;

    }else{
        msgA = `Hey ${tuNombre}`;
    }

    let msgB;

    if (listaNombres == 3) {
        msgB = `${msgA} Te llamas igual que mi hermano`;
    }else if (listaNombres == 6) {
        msgB = `${msgA} Te llamas igual que mi prima`;
    }else {
       msgB = msgA;
    }

    $recibidor.placeholder = msgB;
   
}

document.querySelector('#reset').onclick = function(event){

    resetearCampos();

    event.preventDefault();
}

function resetearCampos(){

    const $tuNombre = document.querySelector('#nombre');
    const $recibidor = document.querySelector('#recibidor');

    $tuNombre.value = " ";
    $recibidor.placeholder = "Texto Secreto";

}

// Esto estaria terminado pero hay que agregar validación para que no pueda apretar el boton mensaje con un input vacio!!!!


// RESOLUCIÓN TAREA B

