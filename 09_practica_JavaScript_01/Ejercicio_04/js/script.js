
// EJERCICIO 4: generar contraseña --------------------------------------------------------------------------------------------------------------------------------

function contrasenya(num) {

    password = "";

    // Cantidades
    numDeNumeros = Math.floor(Math.random() * 2) + 1; 
    numCaracEsp = Math.floor(Math.random() * 2) + 1; 
    numCaracMays = 1;

    // Conjuntos de caracteres
    caracMinus = "abcdefghijklmnopqrstuvwxyz";
    caracMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    caracNums = "0123456789";
    caracEsp = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";


    return ____________________
}


// Determina la longitud de la contraseña
function numeroAleatorio(min, max) {
    minLength = 8;
    maxLength = 50;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log("Generando contraseña: ", contrasenya(8));





// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*

// Recuerda: para obtener números aleatorios usamos esta función: 
//          Math.floor(Math.random() * max) + 1; 

// Nos ha dado una función para desordenar el array: es decir, primero lo montamos paso a paso (reuniendo todos los requisitos [numeros, caracteres especiales, letras]) y luego lo desordenamos empleando esa función:
//          password = password.split('').sort(() => Math.random() - 0.5).join('');



*/





/*

ENUNCIADO 4:

Le puedes decir a la función cuantos caracteres tiene que tener la contraseña,
sabiendo que como mínimo serán 8 y máximo 50 caracteres.
La contraseña tiene que tener:
▪ mínimo 1 número y máximo 2
▪ mínimo 1 carácter especial y máximo 2
▪ mínimo 1 carácter mayúscula
Puedes usar las siguientes funciones si quieres:
// Definimos los caracteres que vamos a usar
let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";
// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
..............
//desordenar array
password = password.split('').sort(() => Math.random() - 0.5).join('');


*/