/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

// Função para gerar e imprimir os primeiros 10 números da sequência de Fibonacci
function generateFibonacci(n) {
    let a = 0; // Primeiro número da sequência
    let b = 1; // Segundo número da sequência

    console.log("Sequência de Fibonacci:");

    for (let i = 0; i < n; i++) {
        console.log(a); // Imprime o número atual

        // Atualiza os valores de a e b
        let next = a + b; // Próximo número da sequência
        a = b; // Atualiza o valor de a para o próximo número
        b = next; // Atualiza o valor de b para o próximo número
    }
}

// Gera e imprime os primeiros 10 números da sequência de Fibonacci
generateFibonacci(10);
