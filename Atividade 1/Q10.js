/*10.Escreva um programa que solicite ao usuário o seu nome e sua idade e em seguida
imprima essas informações juntas em uma única linha.*/

let readline = require('readline-sync');

let nome = readline.question("Digite seu nome: ");
let idade = readline.question("Digite sua idade: ");

console.log("Seu nome é " + nome + " e você tem " + idade + " anos.");
