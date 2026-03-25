# Compilador JavaScript com JavaCC

## Pré-requisitos
- JDK 17 ou superior
- `javacc.jar` no mesmo diretório

## Como baixar o JavaCC
Acesse: https://javacc.github.io/javacc/
Baixe o `javacc.jar` e coloque na pasta do projeto.

## Como compilar e executar

### Windows
```
compilar.bat
```
Ou para um arquivo específico:
```
compilar.bat meu_arquivo.js
```

### Linux/Mac
```
chmod +x compilar.sh
./compilar.sh
```

### Passo a passo manual
```bash
# 1. Gerar o parser
java -cp javacc.jar javacc JavaScript.jj

# 2. Compilar o Java gerado
javac JavaScript.java

# 3. Executar o compilador
java JavaScript teste.js
```

## O que o compilador analisa

### Análise Léxica
- Palavras reservadas: `var`, `let`, `const`, `function`, `if`, `else`, `while`, `for`, `do`, `switch`, `case`, `return`, `break`, `continue`, `try`, `catch`, `throw`, `class`, etc.
- Literais: números, strings (aspas simples, duplas e template), booleanos, `null`, `undefined`
- Operadores: aritméticos, lógicos, relacionais, bitwise, atribuição
- Comentários de linha `//` e bloco `/* */`

### Análise Sintática
- Declarações: `var`, `let`, `const`
- Funções: `function`, arrow functions `=>`
- Classes com métodos e construtor
- Estruturas: `if/else`, `while`, `do/while`, `for`, `for/of`, `for/in`, `switch`
- Tratamento de erros: `try/catch/finally`
- Expressões: aritméticas, lógicas, relacionais, ternário `?:`
- Objetos e arrays literais
- Encadeamento de chamadas e propriedades

### Análise Semântica
- **Erro**: uso de variável não declarada
- **Erro**: redeclaração de `const`
- **Aviso**: redeclaração de `let`/`var` no mesmo escopo
- Controle de escopos (global, função, bloco)
- Variáveis globais do JS (`console`, `Math`, etc.) são reconhecidas

## Estrutura dos arquivos
```
compilador-js/
├── JavaScript.jj        # Fonte principal do compilador (léxico + sintático + semântico)
├── javacc.jar           # Colocar aqui após baixar
├── teste.js             # Arquivo JS de teste (sem erros)
├── teste_erros.js       # Arquivo JS de teste (com erros semânticos)
├── compilar.bat         # Script Windows
├── compilar.sh          # Script Linux/Mac
└── README.md
```
