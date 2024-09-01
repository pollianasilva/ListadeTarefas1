/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

// Importa o módulo 'prompt-sync' para leitura de entrada do usuário
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número e garante que ele seja interpretado como um número decimal padrão
const number = parseInt(prompt('Digite um número inteiro: '), 10);

// Verifica se o número é par ou ímpar
if (number % 2 === 0) {
    console.log("O número " + number + " é par."); // Exibe se o número é par
} else {
    console.log("O número " + number + " é ímpar."); // Exibe se o número é ímpar
}
