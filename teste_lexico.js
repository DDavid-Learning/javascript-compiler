// ============================================================
// TESTE DE ERROS LEXICOS
//
// O analisador lexico falha ao encontrar caracteres que nao
// pertencem ao alfabeto da linguagem (nao formam nenhum token).
//
// Resultado esperado:
//   [ERRO LEXICO] Lexical error at line ...
// ============================================================

// Declaracoes validas (lidas sem problema)
let x = 10;
let nome = "JavaScript";

// ERRO LEXICO: o caractere '@' nao pertence ao alfabeto da linguagem.
// Nenhum token comeca com '@' -- o lexer aborta aqui.
let @invalido = 5;
