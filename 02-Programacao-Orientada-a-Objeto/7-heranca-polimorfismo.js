//Herança e Polimorfismo
//Herança: Classe filha herda propriedades da classe pai
//polimorfismo: Classe pai possui diversas formas que são as classes filhas (classes irmãs)

class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor (nome, idade, rg, cpf) {
        super (nome, idade);
        this.rg = rg;
        this.cpf = cpf;
        
    }
}

const cidadao = new Cidadao ("José", 32, "rg", "cpf");
console.log(cidadao);

//Todo Cidadao é Pessoa, mas nem toda Pessoa é Cidadao

console.log(cidadao instanceof Cidadao);
console.log(cidadao instanceof Pessoa);