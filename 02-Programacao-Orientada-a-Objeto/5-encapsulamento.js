//Encapsulamento: proteger informações dentro do objeto

/*
function Quadrado (base, altura) {
    this.base = base;
    this.altura = altura;
    let cor = "blue";
}

const quadrado = new Quadrado (10, 10);
quadrado.cor = "yellow";
console.log(quadrado.cor); 
*/

//-------------

/*
function criaQuadrado (base, altura) {
    let cor = "blue";

    return {
        base,
        altura,
        getCor: function () {return cor;}
    };
}

const quadrado = criaQuadrado(10, 10);
console.log(quadrado.getCor());
*/

//-------------

class Quadrado {
    constructor (lado, altura) {
        let cor = "red";
        this. lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
    }
}

const quadrado = new Quadrado (10,10);
console.log(quadrado.getCor());
