/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

const prompt = require('prompt-sync')(); // Importa o módulo para ler entradas do usuário

// Solicita ao usuário que informe o número para a tabuada
const number = Number(prompt('Digite um número para exibir a tabuada: '));

// Exibe a tabuada do número fornecido
console.log(`Tabuada do ${number}:`);

// Loop para calcular e exibir a tabuada
for (let i = 1; i <= 10; i++) {
    // Calcula o resultado da multiplicação
    const result = number * i;
    
    // Exibe a linha da tabuada
    console.log(`${number} x ${i} = ${result}`);
}
