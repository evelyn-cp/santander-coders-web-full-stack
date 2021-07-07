//Métodos de Acesso

/*
class Quadrado{
  
    constructor (lado, altura) {
      let cor = 'red';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
      this.setCor = (c) => cor = c;
    }
  }

const quadrado = new Quadrado (4, 4);
quadrado.setCor("blue");
console.log(quadrado.getCor());
*/

//-------------

class Quadrado {
  
    constructor(lado, altura){
      this._cor = 'yellow';
      this.lado = lado;
      this.altura = altura;
    }
  
    get cor() { return this._cor; }
    set cor(cor) { this._cor = cor; }
  }

const quadrado = new Quadrado (5,5);
console.log(quadrado.cor);
quadrado.cor = "pink";
console.log(quadrado.cor);
