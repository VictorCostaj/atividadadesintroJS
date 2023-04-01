/* - Utilizando os conceitos aprendidos sobre Javascript desenvolva as soluções para os seguintes problemas.
 1 - Desenvolva um algoritmo que transforma a idade de uma pessoa expressa em anos, meses e dias e no final dê a idade da pessoa expressa em dias.
 OBS: Considere que 1 ano possui 365 dias e 1 mês possui 30 dias. */

//entrada

 let idade =  Number(prompt("Digite o a sua idade:"));
 let nascimentoMes = Number(prompt ("Digite o mês do seu nascimento:"));
 let nascimentoDia = Number(prompt ("Digite o dia em que nasceu:"));
 
 let IdadeEmDias = idade * 365 + nascimentoMes * 30 + nascimentoDia;

 // processamento
 document.write("A sua idade em dias é:", + IdadeEmDias);
