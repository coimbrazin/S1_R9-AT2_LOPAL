// 4) Peça ao usuário para digitar 10 números e armazene em um vetor. Depois, crie um novo vetor removendo os valores duplicados. Exiba o vetor original e o vetor sem duplicatas.

let numbersOriginals = [];
let numbersNoDuplicates = [];
let sizeNoDuplicate = 0;

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt(`Digite o ${i + 1}° número: `));
  if (!isNaN(number)) {
    numbersOriginals[i] = number;
  } else {
    alert("O valor digitado é inválido, tente novamente!!")
    i--
  }
}

for (let i = 0; i < 10; i++) {
  let repeat = false;
  for (let j = 0; j < 10; j++) {
    if (numbersOriginals[i] === numbersNoDuplicates[j]) {
      repeat = true;
      break;
    }
  }
  if (!repeat) {
    numbersNoDuplicates[sizeNoDuplicate] = numbersOriginals[i];
    sizeNoDuplicate++;
  }
}

console.log("Valores Originais");
for (let i = 0; i < numbersOriginals.length; i++) {
  console.log(numbersOriginals[i]);
}

console.log("Valores Duplicados");
for (let i = 0; i < numbersNoDuplicates.length; i++) {
  console.log(numbersNoDuplicates[i]);
}

console.log(numbersOriginals);

console.log(numbersNoDuplicates);





