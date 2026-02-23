























/*

ENUNCIADO 1: --------------------------------------------------------------------------------------------------------------------------------------------------------------

Genera una página web que responda en console.
El ejercicio consiste en que tienes una función que acepta como parámetro el número de
caras del dado y devuelve un número aleatorio entre 1 y ese número. Usa console para
informar del resultado.
Para números aleatorios puedes usar:
Math.floor(Math.random() * max) + 1;







ENUNCIADO 2: ------------------------------------------------------------------------------------------------------------------------------------------------------------

Haz una página que devuelve los números de la primitiva, recuerda las claves:
• Números entre el 1 y el 49 inclusive
• No se pueden repetir.
• Solo 6.






ENUNCIADO 3:

El cifrado César es un método muy simple para “esconder” un mensaje: sustituyes cada
letra por otra que está un número fijo de posiciones más adelante en el alfabeto (ese
número es la clave o desplazamiento).
Cómo funciona
1. Elige una clave x (por ejemplo, 3).
2. Para cada letra del texto, muévela x posiciones hacia delante en el alfabeto.
3. Si te pasas del final, “das la vuelta” y sigues desde el principio (por ejemplo, con clave
1, la Z pasa a ser A).
Ejemplo rápido (clave = 3)
• Alfabeto normal: A B C D E F ... X Y Z
• Alfabeto cifrado: D E F G H I ... A B C
Si tu mensaje es HOLA y usas clave 3:
• H K, O R, L O, A D, así que queda → → → → KROD.
Para descifrar
Haces lo contrario: en vez de mover hacia delante, mueves cada letra kk posiciones hacia
atrás con la misma clave.







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