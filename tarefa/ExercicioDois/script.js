// Escreva um algoritmo para calcular a porcentagem qualquer de um número qualquer (Ex: 30% de 50)
// OBS: Pode criar as variáveis e atribuir valores fixos para elas. O resultado deve ser o correto para os valores dados às variáveis criadas e atribuídas.


let numero =  Number(prompt("Digite o primeiro número:"));
let porcentagem = Number(prompt ("Digite o numero que deseja a porcentagem:"));

let descobrindoPorcentagem = (numero * porcentagem) / 100;

// processamento
document.write(`o resultado é ${descobrindoPorcentagem} + porcento`);
