
// variables
let num1=document.getElementById("numero1");  // me guardo la caja de texto del html (tipo <input>) en una variable del javascript. 
let boton=document.getElementById("run");   // me guardo el botón del html en una variable del javascript. 
let num2=document.getElementById("numero2");
let salida=document.getElementById("salida");
let borrar1=null;         //document.getElementById("1");
let indice=0;

// eventos
/* 
// Ejercicio 1
boton.addEventListener("click", (e) => {
    console.log("Me han pulsado:" + num1.value * 2)
})
*/

/*
// Ejercicio 2
boton.addEventListener("click", (e) => {
    console.log("Me han pulsado:" + (num1.value * num2.value))
})
*/

/*
// Ejercicio 3
boton.addEventListener("click", (e) => {
    console.log("Me han pulsado:" + (parseInt(num1.value) + parseInt(num2.value)));   // con el signo "+" concatena, para evitarlo hemos de usar parseInt.
    salida.innerHTML=(parseInt(num1.value) + parseInt(num2.value)); 
})
*/

/*
// Ejercicio 4
boton.addEventListener("click", (e) => {
    for (let i=0; i<num1.value; i++){
        salida.innerHTML+=(num2.value); // OJO porque si pones "=" en lugar de "+=" lo que hace es sobreescribir el contenido cada vez. Eso es una diferencia clave con respecto al System.out.print() de Java. Poniendo el "+=" logramos que concatene con lo que ya hay.
    }     
})
*/



// A PARTIR DE AQUÍ YA NO ENTRA EN EL EXAMEN DE MARZO ---------------------------------------------------------------------------------------


// SEGUNDA CLASE DE DOM -----------------------------------------------------------------------------------------------------------------------

// Ejercicio 5 -> ahora lo actualizamos sin tener que usar ningún bucle
boton.addEventListener("click", (e) => { 
    let texto="";
    texto+=num1.value+"<br>";
    salida.innerHTML+=texto;
})


// Ejercicio 6 -> cada vez que le doy al botón con el texto "Go" parece una nueva línea con un nuevo botón llamado "Borrar". Y cada vez que pulso en "Borrar" hace algo (le he asignado a ese botón un listener al mismo tiempo que lo creo).
boton.addEventListener("click", (e) => { 
    let texto="";
    indice++;
    texto+=`<input type='button' value='Borrar' id=${indice} >`  + num1.value+"<br>";   // aquí tenemos un ejemplo de COMILLAS DE EJECUCIÓN
    salida.innerHTML+=texto;
    borrar1=document.getElementById(indice); // con esto hago que el botón apunte al id.
    borrar1.addEventListener("click", (ev) => {
        console.log("Aqui")
        alert("Soy yo")
    })
})


// Ejercicio 7 -> aprendemos a usar e.target
boton.addEventListener("click", (e) => { 
    console.log("Han clickado sobre: "+e.target.id);
    let texto="";
    indice++;
    texto+=`<input type='button' value='Borrar' id=${indice} >`  + num1.value+"<br>";   // aquí tenemos un ejemplo de COMILLAS DE EJECUCIÓN
    salida.innerHTML+=texto;
    borrar1=document.getElementById(indice); // con esto hago que el botón apunte al id.
    borrar1.addEventListener("click", (ev) => {
        console.log("Han clicado sobre:" + ev.target.id);
        console.log("Aqui")
        alert("Soy yo")
    })
})







// main
console.log(num1.value);



// que el número nº1 determine el nº de veces que aparece el segundo número.




/* 
########################################################################################################

1) .addEventListener(   ,     )



2) (e) => { }
    - Esto recibe el nombre de "función flecha".
    - Una función que define qué debe hacer cuando ocurra ese evento.
    - Su sintaxis es esta:
            (parametros) => { cuerpo }
    - El parámetro (e) normalmente se usa para representar un evento. 
    - Esto lo usamos dentro del .addEventListener()
    - Lo que está dentro de las llaves es el código que se va a ejecutar. 







*/