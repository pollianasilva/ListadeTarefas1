/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Função para verificar e classificar o triângulo
function classifyTriangle(a, b, c) {
    // Verifica se os lados formam um triângulo
    if (a < b + c && b < a + c && c < a + b) {
        // Verifica o tipo de triângulo
        if (a === b && b === c) {
            console.log("Triângulo equilátero"); // Todos os lados iguais
        } else if (a === b || a === c || b === c) {
            console.log("Triângulo isósceles"); // Dois lados iguais
        } else {
            console.log("Triângulo escaleno"); // Todos os lados diferentes
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo válido");
    }
}

// Solicita ao usuário que digite os três lados do triângulo
const a = parseFloat(prompt('Digite o valor do lado A: ')); // Converte a entrada para um número float
const b = parseFloat(prompt('Digite o valor do lado B: ')); // Converte a entrada para um número float
const c = parseFloat(prompt('Digite o valor do lado C: ')); // Converte a entrada para um número float

// Chama a função para verificar e classificar o triângulo
classifyTriangle(a, b, c);
