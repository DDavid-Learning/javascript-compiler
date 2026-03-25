#!/bin/bash
echo "========================================"
echo "  Compilador JavaScript com JavaCC"
echo "========================================"

# Verifica se javacc.jar existe
if [ ! -f "javacc.jar" ]; then
    echo "[ERRO] javacc.jar nao encontrado!"
    echo "Baixe em: https://javacc.github.io/javacc/"
    exit 1
fi

echo ""
echo "[1/3] Gerando parser com JavaCC..."
java -cp javacc.jar javacc JavaScript.jj || { echo "[ERRO] Falha no JavaCC!"; exit 1; }

echo ""
echo "[2/3] Compilando classes Java..."
javac JavaScript.java || { echo "[ERRO] Falha no javac!"; exit 1; }

echo ""
echo "[3/3] Executando compilador..."
echo ""

if [ -z "$1" ]; then
    echo "--- Testando: teste.js ---"
    java JavaScript teste.js

    echo ""
    echo "--- Testando erros semânticos: teste_erros.js ---"
    java JavaScript teste_erros.js
else
    java JavaScript "$1"
fi
