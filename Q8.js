/*8. Escreva um programa que solicite ao usuário seu nome e exiba-o no console.*/

let readline = require('readline-sync');

let nome = readline.question("Digite seu nome: ");
console.log("Seu nome é: " + nome);
