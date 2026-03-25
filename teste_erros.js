// Arquivo de teste para verificar erros semânticos

const X = 10;

// ERRO: redeclaração de const
const X = 20;

// ERRO: variável não declarada
console.log(varNaoDeclarada);

// OK: variável declarada antes do uso
let valor = 5;
console.log(valor);

// AVISO: redeclaração com let
let duplicado = 1;
let duplicado = 2;
