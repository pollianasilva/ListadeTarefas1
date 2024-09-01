/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

const prompt = require('prompt-sync')(); // Importa o módulo para ler entradas do usuário

let totalSum = 0; // Variável para armazenar a soma total

// Loop para solicitar 5 números
for (let i = 0; i < 5; i++) {
    // Solicita um número ao usuário
    const number = Number(prompt(`Digite o número ${i + 1}: `));
    
    // Adiciona o número à soma total
    totalSum += number;
}

// Exibe a soma total
console.log(`A soma total dos números é: ${totalSum}`);
