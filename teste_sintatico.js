// ============================================================
// TESTE DE ERROS SINTATICOS
//
// Todos os caracteres sao tokens validos, mas a estrutura
// nao obedece a gramatica da linguagem.
//
// Resultado esperado:
//   [OK] Analise lexica concluida sem erros.
//   [ERRO SINTATICO] Encountered "{" ... Expected ")"
// ============================================================

let valor = 42;

// ERRO SINTATICO: falta ')' para fechar a condicao do if.
// O parser espera ')' mas encontra '{'.
if (valor > 10 {
    console.log("maior que 10");
}
