/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Função para classificar a idade
function classifyAge(age) {
    if (age < 12) {
        console.log("Criança"); // Imprime "Criança" para idades menores que 12
    } else if (age < 18) {
        console.log("Adolescente"); // Imprime "Adolescente" para idades de 12 a 17
    } else if (age < 60) {
        console.log("Adulto"); // Imprime "Adulto" para idades de 18 a 59
    } else {
        console.log("Idoso"); // Imprime "Idoso" para idades 60 e acima
    }
}

// Solicita ao usuário que digite sua idade
const age = parseInt(prompt('Digite sua idade: '), 10); // Converte a entrada para um número inteiro

// Chama a função de classificação de idade
classifyAge(age);
