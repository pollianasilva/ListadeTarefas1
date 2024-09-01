/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

// Importa o módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Função para exibir o menu e processar a escolha do usuário
function showMenu() {
    console.log("Escolha uma opção:");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");

    // Solicita ao usuário que escolha uma opção
    const choice = parseInt(prompt('Digite o número da opção: '), 10);

    // Processa a escolha usando switch-case
    switch (choice) {
        case 1:
            console.log("Você escolheu a Opção 1");
            // Adicione a lógica para a Opção 1 aqui
            break;
        case 2:
            console.log("Você escolheu a Opção 2");
            // Adicione a lógica para a Opção 2 aqui
            break;
        case 3:
            console.log("Você escolheu a Opção 3");
            // Adicione a lógica para a Opção 3 aqui
            break;
        default:
            console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
    }
}

// Chama a função para exibir o menu e processar a escolha do usuário
showMenu(); 
