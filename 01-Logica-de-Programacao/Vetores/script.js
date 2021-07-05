// Vetor - Lista ou sequência de informações

/* let vetor = [10, 20, 30, 40, 50];
console.log(vetor[2]);

vetor[2] = 60;

console.log(vetor[2]);

vetor[2] = "trinta";

console.log(vetor[2]); */

//------------------

//Vetor vazio

let vetor2 = [];
for (let i = 0; i < 10; i++) {
    vetor2.push(i);
}

console.log(vetor2);

//------------------

let vetor3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

/* for (let i=0; i<vetor3.length; i++) {
    console.log(vetor3[i]);
} */

for (let numero of vetor3) {
    console.log(numero);
}

for (let indice in vetor3) {
    console.log(vetor3[indice]);
}

//------------------

//Matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let linha of matriz) {
    for (let elemento of linha) {
        console.log(elemento);
    }
}


