/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Função para classificar a categoria de peso com base no IMC
function classifyBMI(imc) {
    if (imc < 18.5) {
        console.log("Você está abaixo do peso"); // IMC menor que 18.5
    } else if (imc < 24.9) {
        console.log("Seu peso está normal"); // IMC entre 18.5 e 24.9
    } else if (imc < 29.9) {
        console.log("Cuidando, você está com sobrepeso"); // IMC entre 25 e 29.9
    } else {
        console.log("Você está com obesidade, procure ajuda"); // IMC 30 ou mais
    }
}

// Função para calcular o IMC
function calculateBMI(weight, height) {
    return weight / (height * height); // Calcula o IMC: peso dividido pela altura ao quadrado
}

// Solicita ao usuário que digite seu peso e altura
const weight = parseFloat(prompt('Digite seu peso em kg: ')); // Converte a entrada para um número float
const height = parseFloat(prompt('Digite sua altura em metros (ex:1.65): ')); // Converte a entrada para um número float

// Calcula o IMC
const imc = calculateBMI(weight, height);

// Exibe a categoria de peso com base no IMC
classifyBMI(imc);
