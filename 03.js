/*03- Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

/* 03 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Função para classificar a nota
function classifyGrade(grade) {
    if (grade < 0 || grade > 10) {
        console.log("Digite uma nota válida entre 0 e 10"); // Imprime mensagem para notas fora do intervalo permitido
    } else if (grade >= 7) {
        console.log("Aprovado"); // Imprime "Aprovado" para notas maiores ou iguais a 7
    } else if (grade >= 5) {
        console.log("Recuperação"); // Imprime "Recuperação" para notas maiores ou iguais a 5
    } else {
        console.log("Reprovado"); // Imprime "Reprovado" para notas menores que 5
    }
}

// Solicita ao usuário que digite a nota
const grade = parseFloat(prompt('Digite a nota (0 a 10): ')); // Converte a entrada para um número float

// Chama a função de classificação de nota
classifyGrade(grade);
