/*11.Escreva um programa que solicite ao usuário um número e converta-o para número
usando parseInt(). Em seguida, exiba o número convertido no console.*/

let readline = require('readline-sync');

let numStr = readline.question("Digite um numero: ");
let numInt = parseInt(numStr);

console.log("Seu numeor é : " + numInt + " , e o tipo da variavel é: " + typeof numInt);