// ============================================================
// TESTE DE ERROS SEMANTICOS
//
// Lexico e sintaxe estao corretos. Os erros sao de significado:
// variaveis usadas sem declaracao ou redeclaradas ilegalmente.
//
// Resultado esperado:
//   [OK] Analise lexica e sintatica concluida sem erros.
//   [ERRO SEMANTICO] Redeclaracao invalida da variavel 'MAX' (x2)
//   [ERRO SEMANTICO] Variavel 'naoDeclarada' utilizada sem declaracao (x2)
//   [AVISO SEMANTICO] Variavel 'contador' ja declarada neste escopo
//   [AVISO SEMANTICO] Variavel 'ativa' ja declarada neste escopo
// ============================================================

// ------------------------------------------------------------------
// ERROS: redeclaracao de const (const nao pode ser redeclarado)
// ------------------------------------------------------------------

const MAX = 100;
const MAX = 200;     // ERRO: redeclaracao de const com const
let MAX = 300;       // ERRO: redeclaracao de const com let

// ------------------------------------------------------------------
// ERRO: uso de variavel sem declaracao
// ------------------------------------------------------------------

console.log(naoDeclarada);           // ERRO: nunca foi declarada
let resultado = naoDeclarada + 10;   // ERRO: nunca foi declarada

// ------------------------------------------------------------------
// AVISOS: redeclaracao de let e var (permitido, mas suspeito)
// ------------------------------------------------------------------

let contador = 0;
let contador = 1;    // AVISO: redeclaracao de let no mesmo escopo

var ativa = true;
var ativa = false;   // AVISO: redeclaracao de var no mesmo escopo

// ------------------------------------------------------------------
// OK: declaracoes e usos corretos (nao geram erro nem aviso)
// ------------------------------------------------------------------

const PI = 3.14;
let area = PI * 5 * 5;
console.log(area);
