
// EJERCICIO 4: generar contraseña --------------------------------------------------------------------------------------------------------------------------------

function contrasenya(num) {

    password = "";

    if(num<8){
        return "La contraseña debe tener como mínimo 8 caracteres.";
    }

    if(num>50){
        return "La contraseña no puede tener más de 50 caracteres.";
    }

    // Cantidades
    numDeNumeros = Math.floor(Math.random() * 2) + 1; 
    numCaracEsp = Math.floor(Math.random() * 2) + 1; 
    numCaracMays = 1;

    // Conjuntos de caracteres
    caracMinus = "abcdefghijklmnopqrstuvwxyz";
    caracMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    caracNums = "0123456789";
    caracEsp = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

    // Le añado los números.
    for(let i=0; i<numDeNumeros; i++){   // en la condición pongo un "<" y no un "<=" porque la "i" se inicializa en cero. 
                // Math.floor(Math.random() * max) + 1; -> este es el código para generar números aleatorios. -> le quito el +1 para que el resultado pueda ser 0 (charAt(0)).
        password = password + (caracNums.charAt(Math.floor(Math.random() * (caracNums.length-1))));
    }

    // Le añado los carácteres especiales.
    for(let i=0; i<numCaracEsp; i++){
        password = password + (caracEsp.charAt(Math.floor(Math.random() * (caracEsp.length-1))));
    }
    
    // Le añado las mayúsculas. 
    password = password + (caracMayus.charAt(Math.floor(Math.random() * (caracMayus.length-1))));


    // Completo hasta la longitud deseada con minúsculas
    for(let i=0; i<num; i++){   // en la condición había puesto password.length y por lo tanto había caído en un bucle infinito (y la consola ni siquiera cargaba en la web debido a ello).
        password = password + (caracMinus.charAt(Math.floor(Math.random() * (caracMinus.length-1))));
    }


    // Desordeno el array -> este código nos lo da el propio enunciado.
    password = password.split('').sort(() => Math.random() - 0.5).join('');


    return password;
}


console.log("Contraseña generada: ", contrasenya(8));



/*

// Funciona correctamente, me ha dado esta salida: Contraseña generada:  fkfu31F]fxgf


*/





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