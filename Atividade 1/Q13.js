/*13.Escreva um programa que solicite ao usuário sua idade e converta-a para
número usando Number(). Em seguida, exiba a idade no console.*/

let readline = require('readline-sync');

let idadeStr = readline.question("Digite sua idade: ");
let idade = Number(idadeStr);

console.log("Sua idade e: " + idade);
