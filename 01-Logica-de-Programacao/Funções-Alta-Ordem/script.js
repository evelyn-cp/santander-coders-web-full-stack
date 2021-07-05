//Funções de Alta Ordem

const subtrair = (a,b) => a-b;
const aplicaOperacao = (a, b, operacao) => operacao(a,b);

let resultado = aplicaOperacao(4, 2, subtrair);
console.log(resultado);

//-----------------

const somarX = (x) => (y) => x+y;

const somar2 = somarX(2);

const somar3 = somarX(3);

console.log(somar3(5));


