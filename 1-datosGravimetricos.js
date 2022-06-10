const prompt = require('prompt-sync')();

let datosTotales = [];

let continuar = true;
let contador = 1;

console.log('El siguiente programa registra los datos gravimetricos diarios resultantes del estudio de campo de los estudiantes de Ingeniería Geofisica');
console.log(' y Geología de la UCV. Por favor ingrese solo valores numericos \n');


while (continuar) {
    console.log('Valores correspondientes al dia ' + contador);
    console.log('Ingrese el minimo diario');
    let minimoDiario = parseFloat(prompt() )

    console.log('Ingrese el maximo diario');
    let maximoDiario = parseFloat(prompt() ) 

    contador = contador + 1
    datosTotales.push([minimoDiario, maximoDiario])

    if(maximoDiario === 0 && minimoDiario === 0){
        continuar = false
    }

    
    console.log('\n\n');
}

let valoresMenores = []
let valoresMayores = []
let valoresAmbos = []
let valoresCorrectos = []

datosTotales.pop();

datosTotales.forEach( parDiario => {
    if(parDiario[0] < -100 && parDiario[1] > 100) {
        valoresAmbos.push(parDiario)
    } else if (parDiario[0] > 100 || parDiario[1] > 100) {
        valoresMayores.push(parDiario)
    } else if(parDiario[0] < -100 && parDiario[1] < -100 ){
        valoresMenores.push(parDiario)
    } else {
        valoresCorrectos.push(parDiario)
    }
});

let sumaValoresCorrectos = 0
let variacionesNetas = []
valoresCorrectos.forEach( variacion => {
    const variacionNeta = variacion[1] - variacion[0];
    variacionesNetas.push(variacionNeta)
    sumaValoresCorrectos = sumaValoresCorrectos + variacionNeta
}) 


const minima = Math.min(...variacionesNetas)
const maxima = Math.max(...variacionesNetas)


let totalDiasErrores = valoresAmbos.length + valoresMayores.length + valoresMenores.length;

console.log('Dias totales de estudio: ' + datosTotales.length);
console.log('Dias totales con errores: ' + totalDiasErrores);

console.log('Dias con valores menores a -100: ' + valoresMenores.length);
console.log('Dias con valores mayores a 100: ' + valoresMayores.length);
console.log('Dias con valores mayores a 100 y menores a -100: ' + valoresAmbos.length);
console.log('La maxima fue de ' + maxima);
console.log('La minima fue de ' + minima);
console.log('La media fue de ' + sumaValoresCorrectos/valoresCorrectos.length);
