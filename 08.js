/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite dois valores
const value1 = Number(prompt('Digite o primeiro valor: '));
const value2 = Number(prompt('Digite o segundo valor: '));

// Verifica se os valores são iguais
if (value1 === value2) {
    console.log("Os valores não podem ser iguais. Por favor, digite dois valores diferentes.");
} else {
    // Verifica qual valor é menor e exibe-os em ordem crescente
    if (value1 < value2) {
        console.log(`Ordem crescente: ${value1}, ${value2}`);
    } else {
        console.log(`Ordem crescente: ${value2}, ${value1}`);
    }
}
