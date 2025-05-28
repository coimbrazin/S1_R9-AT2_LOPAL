// 2 - Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.

let numbers = [];

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt(`Digite o ${i+1}° número: `));
  if (!isNaN(number)){
    numbers[i] = number;
  } else {
    alert("O valor digitado é inválido, tente novamente!!")
    i--;
  }
}

for (let i = 0; i < 10; i++) {
  if (numbers[i] % 2 == 0){
    console.log(`O número na posição [${i}] é par, esse número é: [${numbers[i]}]`);
  } else {
    console.log(`O número na posição [${i}] não é par, esse número é: [${numbers[i]}]`);
  }
}

console.log(numbers);






