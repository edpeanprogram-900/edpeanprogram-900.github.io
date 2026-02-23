
// EJERCICIO 2: la primitiva

function primitiva() {
    let numeros = [];

    while (numeros.length < 6) {
        let n = Math.floor(Math.random() * 49) + 1;
        if (!numeros.includes(n)) {  // solo añado el número si NO está repetido.
            numeros.push(n);  
        }    
    }
    return numeros; 

}





/*


ENUNCIADO 2: ------------------------------------------------------------------------------------------------------------------------------------------------------------

Haz una página que devuelve los números de la primitiva, recuerda las claves:
• Números entre el 1 y el 49 inclusive
• No se pueden repetir.
• Solo 6.



*/

/*

Esto nos lo da el enunciado: Para números aleatorios puedes usar: 

            Math.floor(Math.random() * max) + 1;


*/

/*

El length de los arrays en JavaScript es como en Java -> .length -> sin paréntesis (porque es un atributo).

*/