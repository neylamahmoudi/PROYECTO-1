const prompt = require('prompt-sync')();

let stringInicial = prompt('Ingrese numeros separados por una \"," e ingrese minimo 20 valores: ');

let arregloString = stringInicial.split(',')

if(arregloString.length < 20){
    console.log('Debe ingresar minimo 20 valores para continuar con la ejecucion.');
} else {

    let arregloNumeros = []
    arregloString.forEach(element => {
        arregloNumeros.push(parseFloat(element))
    })
    

    let sumaNumeros =  0
    arregloNumeros.forEach(numero => {
        sumaNumeros = sumaNumeros + numero
    });

    console.log('Los datos ingresados son '+ arregloNumeros);

    const media = sumaNumeros/arregloNumeros.length
    console.log('La media de los datos es '+ media);

    let numeroOrdenados = arregloNumeros.sort(function(a, b){return a - b});

    if(numeroOrdenados.length % 2 != 0) {
        posicionMediana = (numeroOrdenados.length + 1)/2
        console.log('La mediana de los datos es ' + numeroOrdenados[posicionMediana]);
    } else {
        const ind = numeroOrdenados.length / 2;
        const mediana = (numeroOrdenados[ind] + numeroOrdenados[ind + 1])/ 2;

        console.log('La mediana de los datos es ' + mediana);
    }

    const minimo = Math.min(...numeroOrdenados)
    const maximo = Math.max(...numeroOrdenados)

    const rango = maximo - minimo;

    console.log('El rango de los datos es ' + rango);


    numeroOrdenados = numeroOrdenados.map(numero => {
        return (numero - media) **2
    })

    let sumaActualizada = 0
    numeroOrdenados.forEach(numero => {
        sumaActualizada = sumaActualizada + numero
    })

    console.log('La desviacion estandar de los datos es ' + Math.sqrt(sumaActualizada /numeroOrdenados.length));
}