/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número inteiro
const number = parseInt(prompt('Digite um número inteiro: '), 10); // Converte a entrada para um número inteiro

// Escreve o número na tela 10 vezes
for (let i = 0; i < 10; i++) {
    console.log(number);
}
