//Funções

function escreva () {
    console.log("Olá!");
}

escreva();

//-----------------

function escreva2 (texto) {
    console.log(texto);
}

escreva2("Meu primeiro parâmetro");
escreva2("Meu segundo parâmetro");

//-----------------

function somar(a, b) {
    return a+b;
}

let resultado = somar(1, 3);
console.log(resultado);

//-----------------

const somar2 = function (a,b) {
    return a+b;
}

console.log(somar2(1,3));

//-----------------

const somar3 = (a,b) => a+b;

console.log(somar3(1,3));

