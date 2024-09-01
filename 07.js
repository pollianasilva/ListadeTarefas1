/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Solicita ao usuário que informe a quantidade de maçãs compradas
const quantity = Number(prompt("Digite o número de maçãs compradas: ")); // Converte a entrada para um número

// Define o preço por maçã baseado na quantidade comprada
let pricePerApple;

if (quantity < 12) {
    pricePerApple = 0.30; // Preço por maçã se forem compradas menos de 12
} else {
    pricePerApple = 0.25; // Preço por maçã se forem compradas 12 ou mais
}

// Calcula o valor total da compra
const totalCost = quantity * pricePerApple;

// Exibe o valor total da compra
console.log(`Você irá pagar um total de: R$ ${totalCost.toFixed(2)}`);
