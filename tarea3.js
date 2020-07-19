// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


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

    $tuNombre.value =" ";
    $recibidor.placeholder = "Texto Secreto";

}

/*Esto estaria terminado pero hay que agregar validación para que 
no pueda apretar el boton mensaje con un input vacio!!!!
También tengo un problema al apretar el boton reset que me genera
un error, ya que el código anda en la primer ronda, pero no en la segunda. */


// RESOLUCIÓN TAREA B

