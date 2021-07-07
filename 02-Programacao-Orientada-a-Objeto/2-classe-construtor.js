//Classe e Construtor

class Pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
};

const pessoa1 = new Pessoa ("Carlos", 20);
console.log(pessoa1);
pessoa1.idade = 21
console.log(pessoa1.idade);

const pessoa2 = new Pessoa ("Clara", 22);
console.log(pessoa2);
