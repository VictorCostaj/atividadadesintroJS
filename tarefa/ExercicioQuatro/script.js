// 4 - Escreva um algoritmo que converta uma temperatura de Fahrenheit para Celsius (Ex: 42°F = x°C)
// OBS: Pode criar as variáveis e atribuir valores fixos para elas. O resultado deve ser o correto para os valores dados às variáveis criadas e atribuídas.

let fahrenheit = prompt("Escreva a temperatura em Fahrenheit:");
let convertaFahrenheit = (fahrenheit - 32) / 1.8;

// processamento
document.write(
  `a temperatura de Fahrenheit para Celsius é de: ${convertaFahrenheit}°F`
);
