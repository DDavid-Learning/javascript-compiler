// Arquivo de teste para o compilador JavaScript

// Declaracoes de variaveis
var nome = "Joao";
let idade = 25;
const PI = 3.14;

// Funcao simples
function saudacao(pessoa) {
    return "Ola, " + pessoa;
}

// Arrow function
const soma = (a, b) => a + b;

// If/else
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// While
let contador = 0;
while (contador < 5) {
    contador++;
}

// For
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For...of
const frutas = ["maca", "banana", "laranja"];
for (const fruta of frutas) {
    console.log(fruta);
}

// Switch
switch (nome) {
    case "Joao":
        console.log("Ola Joao!");
        break;
    default:
        console.log("Ola visitante!");
}

// Try/catch
try {
    let resultado = 10 / 0;
} catch (e) {
    console.log("Erro: " + e);
}

// Objeto literal
const pessoa = {
    nome: "Maria",
    idade: 30
};

// Array
const numeros = [1, 2, 3, 4, 5];

// Expressoes logicas e relacionais
let ativo = true;
if (ativo && idade > 18) {
    console.log("Usuario ativo e adulto");
}

// Operador ternario
let status = idade >= 18 ? "adulto" : "menor";

console.log(saudacao(nome));
console.log(soma(3, 4));
