// 3 - Escreva um algoritmo que converta uma temperatura de Celsius para Fahrenheit (Ex: 30°C = x°F)
// OBS: Pode criar as variáveis e atribuir valores fixos para elas. O resultado deve ser o correto para os valores dados às variáveis criadas e atribuídas.

let Celsius = prompt("Escreva a temperatura em Celsius:");
let convertaCelsius = (Celsius * 1.8) + 32;

// processamento
document.write(
  `a temperatura de Celsius para Fahrenheit é de: ${convertaCelsius}°F`
);
