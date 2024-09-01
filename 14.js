/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número
const number = parseInt(prompt('Digite um número para calcular o fatorial: '), 10);

// Função para calcular o fatorial
function calculateFactorial(n) {
    let factorial = 1; // Começa com 1, porque 0! = 1 e 1! = 1
    let i = 1;
    
    while (i <= n) {
        factorial *= i; // Multiplica o valor atual de 'factorial' por 'i'
        i++; // Incrementa 'i' para a próxima iteração
    }
    
    return factorial;
}

// Calcula o fatorial do número fornecido
const result = calculateFactorial(number);

// Exibe o resultado
console.log(`O fatorial de ${number} é ${result}`);

