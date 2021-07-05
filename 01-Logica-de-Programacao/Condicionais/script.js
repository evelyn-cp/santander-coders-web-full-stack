//Condicionais

let estaSol = false;

if(estaSol) {
    console.log('vou pra praia');
}

else {
    console.log('vou pro campo');
}

// ------------------------

let numero = -2;

if(numero > 0) {
    console.log("Número positivo");
}

else if (numero == 0) {
    console.log("Número igual a zero")
}

else {
    console.log("Número negativo");
}

// ------------------------

let number = 4;
let paridade = number % 2 == 0 ? 'par' : 'ímpar';
console.log(paridade);

// ------------------------

let sinal ='vermelho';

switch(sinal) {
    case 'verde' :
        console.log("Pode passar");
        break;
    case 'amarelo' :
        console.log("Prestes a fechar, cuidado...");
        break;
    case 'vermelho' :
        console.log("Fechado, não passe");
        break;
    default:
        console.log("Sinal inválido");
}

