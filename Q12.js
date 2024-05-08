/*12.Escreva um programa que peça ao usuário para digitar sua altura em metros e
converta-a para número de ponto flutuante usando parseFloat(). Em seguida, exiba
a altura convertida no console.*/

let readline = require('readline-sync');

let alturaStr = readline.question("Dgite sua altura em metros: ");
let altura = parseFloat(alturaStr);

console.log("Sua altura é: " + altura + "m");
