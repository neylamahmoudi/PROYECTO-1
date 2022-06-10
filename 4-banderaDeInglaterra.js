const prompt = require('prompt-sync')();

console.log('ingrese el valor de H');
let valorH = parseFloat(prompt() )

console.log('ingrese el valor de L');
let valorL = parseFloat(prompt() )

if(valorH % 2 == 0 || valorL % 2 == 0 || valorH < 2 || valorH > 20 || valorL < 2 || valorL > 20){
    console.log('Los valores ingresados son invalidos ya que ambos valores deben ser impares, mayores que 2 y menores que 20');
} else {

}

let mitadL = (valorL - (valorL % 2))/ 2;
let mitadH = (valorH - (valorH % 2))/ 2;

for(let i = 0; i < valorH; i++){
    if(i == mitadH){
        let stringImp = ''
        for(let f = 1; f <= (valorH % 2); f++){
            for (let g = 0; g < valorL; g++) {
                stringImp = stringImp + '+'
                
            }
            console.log(stringImp);
        }
    } else {
        let stringImpL = ''
        for(let j = 0 ; j < valorL ; j++) {
            
    
            if(j == mitadL) {
                for(let h = 1; h <= (valorL % 2); h++){
                    stringImpL = stringImpL + '+'
                }
            } else {
                stringImpL = stringImpL + '0'
            }
    
        }

        console.log(stringImpL);
    }
  
}