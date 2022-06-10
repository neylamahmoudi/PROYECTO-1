const prompt = require('prompt-sync')();


let valor = parseFloat(prompt('Ingrese el valor a retirar:  '));

 b50  = 0;
 b100 = 0; 
 b20 = 0;
 b10 = 0;
 b5 = 0;
 b1 = 0;
 temp = 0;

if ( valor >= 100 ){
    temp = valor % 100;
    let valorDivisible = valor - temp
    b100 = valorDivisible / 100;
    valor = temp;
}

if ( valor >= 50 ){
    temp = valor % 50;
    let valorDivisible = valor - temp
    b50 = valorDivisible / 50;
    valor = temp;      
}

if ( valor >= 20 ){
    temp = valor % 20;
    let valorDivisible = valor - temp
    b20 = valorDivisible / 20;
    valor = temp;    
}

if ( valor >= 10 ){
    temp = valor % 10;
    let valorDivisible = valor - temp
    b10 = valorDivisible / 10;
    valor = temp;    
}

if ( valor >= 5 ){
    temp = valor % 5;
    let valorDivisible = valor - temp
    b5 = valorDivisible / 5;
    valor = temp;      

}

if ( valor >= 1 ){
    temp = valor % 1;
    let valorDivisible = valor - temp
    b1 = valorDivisible / 1;
    valor = temp;  
}


if(b100 == 1) {
    console.log('1 Billete de 100$')
} else if ( b100 > 1) {
    console.log(b100 + ' Billetes de 100$')
}

if(b50 == 1) {
    console.log('1 Billete de 50$')
} else if ( b50 > 1) {
    console.log(b50 + ' Billetes de 50$')
}

if(b20 == 1) {
    console.log('1 Billete de 20$')
} else if ( b20 > 1) {
    console.log(b20 + ' Billetes de 20$')
}

if(b10 == 1) {
    console.log('1 Billete de 10$')
} else if ( b10 > 1) {
    console.log(b10 + ' Billetes de 10$')
}

if(b5 == 1) {
    console.log('1 Billete de 5$')
} else if ( b5 > 1) {
    console.log(b5 + ' Billetes de 5$')
}

if(b1 == 1) {
    console.log('1 Billete de 1$')
} else if ( b1 > 1) {
    console.log(b1 + ' Billetes de 1$')
}
