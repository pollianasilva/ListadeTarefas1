/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const prompt = require('prompt-sync')(); // Importa o módulo para ler entradas do usuário

let sum = 0; // Variável para armazenar a soma dos números
let count = 0; // Variável para contar quantos números foram inseridos

while (true) {
    // Solicita ao usuário que informe um número decimal
    const number = parseFloat(prompt('Digite um número decimal (ou 0 para sair): '));
    
    // Verifica se o usuário digitou 0 para sair do loop
    if (number === 0) {
        break; // Sai do loop se o número for 0
    }
    
    // Adiciona o número à soma total e incrementa a contagem
    sum += number;
    count++;
}

// Verifica se pelo menos um número foi inserido
if (count > 0) {
    // Calcula e exibe a média aritmética
    const average = sum / count;
    console.log(`A média aritmética dos números inseridos é: ${average.toFixed(2)}`);
} else {
    console.log('Nenhum número válido foi inserido.');
}
