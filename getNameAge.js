//Crie um programa que recebe seu nome e sua idade, e imprima no console.

const name = process.argv[2];
const age = Number(process.argv[3]);
const year = Number(process.argv[4]);
const newAge = age + year

console.log(`Olá, ${name}! Você em ${age} anos.`)
console.log(`Em ${year} anos você terá ${newAge} anos.`)