// 1 - Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

let names = [];

for (let i = 0; i < 7; i++) {
  let name = prompt(`Digite o nome da ${i+1}° pessoa: `);
  if (isNaN(name)){
    names[i] = name;
  } else {
    alert("O valor digitado é inválido, tente novamente!!")
    i--;
  }
}

for (let i = 6; i >= 0; i--) {
  console.log(`O nome na posição [${i}] é [${names[i]}]`);
}

console.log(names);






