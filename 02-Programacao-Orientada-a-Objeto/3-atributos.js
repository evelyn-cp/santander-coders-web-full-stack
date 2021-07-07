//Atributos

class Quadrado {
    constructor (base, altura) {
        if (isNaN(base) || isNaN(altura)) throw "Informação não numérica";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
};

const quadrado = new Quadrado (12, 12);
console.log(quadrado);

const quadrado2 = new Quadrado ("doze", "doze");
console.log(quadrado2);

const quadrado3 = new Quadrado (14, 14);
quadrado3.cor = "green";
console.log(quadrado3);