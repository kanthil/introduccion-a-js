/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const $botonConfirmar = document.querySelector('#confirmar-familiares');
$botonConfirmar.onclick = function(){
    let cantidadFamilares = Number(document.querySelector('#familiares').value);
    let nodoBody = document.querySelector('body');

    let nuevoParrafo = document.createElement('p');
    let textoParrafo = document.createTextNode('Ingrese la edad de sus familiares:');
    nuevoParrafo.appendChild(textoParrafo);
    nodoBody.appendChild(nuevoParrafo);

    //Crea div contenedor de los inputs
    let nuevoDivInputs = document.createElement('div');
    nuevoDivInputs.id = "div-inputs";
    nodoBody.appendChild(nuevoDivInputs);

    //Crea boton calcular edad
    let nuevoBotonConfirmar = document.createElement('button');
    let textoBotonConfirmar = document.createTextNode('Calcular');
    nuevoBotonConfirmar.id = 'calcular-edades';
    nuevoBotonConfirmar.appendChild(textoBotonConfirmar);
    nodoBody.appendChild(nuevoBotonConfirmar);

    //Loop que crea inputs en base a cantidadFamiliares
    for (i = 0; i < cantidadFamilares; i++){
        let nuevosInputs = document.createElement('input');
        let lineBreak = document.createElement('br');
        nuevosInputs.placeholder = `Edad familiar #${i + 1}`;
        nuevosInputs.className = 'edad-inputs';        
        nuevoDivInputs.appendChild(nuevosInputs);
        nuevoDivInputs.appendChild(lineBreak);
    }

	//Boton confirmar
    nuevoBotonConfirmar.onclick = function(){
        let valuesInputs = document.querySelectorAll('.edad-inputs');
        let mayorEdad = Number(valuesInputs[0].value);
        let menorEdad = Number(valuesInputs[0].value);
        let promedioEdad = 0;
        for (i = 0; i < valuesInputs.length; i++){
            if (valuesInputs[i].value > mayorEdad){
                mayorEdad = valuesInputs[i].value;
            }
            if (valuesInputs[i].value < menorEdad){
                menorEdad = valuesInputs[i].value;
            }
            promedioEdad += Number(valuesInputs[i].value);
        }
        
        promedioEdad /= valuesInputs.length;
        let calculosEdad = document.createElement('p');
        let calculosEdadTexto = document.createTextNode(`La mayor edad es de ${mayorEdad} años. La menor edad es de ${menorEdad} años. La edad promedio es de ${promedioEdad} años.`);
        calculosEdad.appendChild(calculosEdadTexto);
        nodoBody.appendChild(calculosEdadTexto);
    }
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
