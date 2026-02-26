
// EJERCICIO 3: cifrado César

// VERSIÓN indicada por Pascual -------------------------------------------------------------------------------------------------------------------------------------

let alfabeto = "abcdefghijklmnñopqrstuvwxyz";
let frase = "casa";
let paso = 3;
let fraseCifrada = "";

for (let i=0; i<frase.length; i++) {
    console.log(frase[i]);
    let posicion = (alfabeto.indexOf(frase[i])+paso) % alfabeto.length;      // el módulo nos sirve para que nunca se salga del array (que no de el error de out of bouns).
    let letraCifrada = alfabeto[posicion];
    fraseCifrada = fraseCifrada + letraCifrada;

}

console.log(fraseCifrada);


/*



*/




/*


ENUNCIADO 3:

El cifrado César es un método muy simple para “esconder” un mensaje: sustituyes cada letra por otra que está un número fijo de posiciones más adelante en el alfabeto (ese número es la clave o desplazamiento).

Cómo funciona
1. Elige una clave x (por ejemplo, 3).
2. Para cada letra del texto, muévela x posiciones hacia delante en el alfabeto.
3. Si te pasas del final, “das la vuelta” y sigues desde el principio (por ejemplo, con clave1, la Z pasa a ser A).
Ejemplo rápido (clave = 3)
• Alfabeto normal: A B C D E F ... X Y Z
• Alfabeto cifrado: D E F G H I ... A B C
Si tu mensaje es HOLA y usas clave 3:
• H K, O R, L O, A D, así que queda → → → → KROD.
Para descifrar
Haces lo contrario: en vez de mover hacia delante, mueves cada letra kk posiciones hacia atrás con la misma clave.



*/





// Versión empleando .charCodeAt() -------------------------------------------------------------------------------------------------------------------------------------


function cifradoCesar(texto, clave) {
    let resultado = "";

    for (let char of texto) {                                      // esto equivale al for-each de Java. -> char irá tomando como valor los diferentes caracteres del texto de forma sucesiva. 
        if (char.match(/[A-Z]/i)) {                               // compruebo que el caracter sea una letra del alfabeto -> las barras son para indicar que estoy introduciendo una expresión regular. La "i" es para indicarle que no diferencie entre mayúsculas y minúsculas. 
            let codigo = char.toUpperCase().charCodeAt(0);         // convierto el código a mayúscula y luego obtengo el código Unicode de esa letra. 
            let nueva = ((codigo - 65 + clave) % 26) + 65;         // al restarle 65 logro que el código unicode de la letra se transforme en un número del 0 a 25. Le sumo después el desplazamiento. Luego obtengo el resto de dividir entre 26. Luego le sumo los 65. De este modo obtengo el código Unicode de la letra CODIFICADA (desplazada).
            resultado = resultado + String.fromCharCode(nueva);    // para poder concatenarlo lo convierto a String. 
        }
    }
    return resultado;
}

console.log("Cifrado César:", cifradoCesar("HOLA", 3));




/*

if (char.match(/[A-Z]/i)) {    // Las barras son para indicar que estamos escribiendo una expresión regular (ya hemos usado expresiones regulares en Bash, solo que la sintaxis es diferente). -> la "i" es para que no distinga entre mayúsculas y minúsculas. 

*/