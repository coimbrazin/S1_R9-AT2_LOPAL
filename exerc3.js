// 3 - Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um número (chave) e seu programa deve mostrar em que posições essa chave foi encontrada. Mostre também quantas vezes a chave foi sorteada.

let numbers = [];
let key;
let count = 0;

for (let i = 0; i < 30; i++) {
  numbers[i] = Math.ceil(Math.random() * 15);
}

let i = 0
do {
  key = parseInt(prompt("Digite um número entre 1 e 15:"));
  if (!isNaN(key) && key >= 1 && key <= 15) {
    i++;
  } else {
    alert("O valor digitado é inválido, tente novamente!!")
  }
} while (i < 1);

for (let i = 0; i < 30; i++) {
  if (numbers[i] === key) {
    console.log(`A chave [${key}] foi encontrada nessa posição [${i}]`);
    count++;
  }
}

console.log(`O número [${key}] foi encontrado [${count}] vez(es) no vetor`);

for (let i = 0; i < 30; i++) {
  console.log(`O número na posição [${i}] é [${numbers[i]}]`);
}

console.log(numbers);



