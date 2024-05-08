/*9. Escreva um programa que peça ao usuário para digitar sua idade e exiba-a no
console.*/

let readline = require('readline-sync');

let idade = readline.question("Digite sua idade: ");
console.log("Sua idade é: " + idade);
