@echo off
echo ========================================
echo   Compilador JavaScript com JavaCC
echo ========================================

REM Verifica se o javacc.jar existe
if not exist "javacc.jar" (
    echo [ERRO] javacc.jar nao encontrado neste diretorio!
    echo Baixe em: https://javacc.github.io/javacc/
    pause
    exit /b 1
)

echo.
echo [1/3] Gerando parser com JavaCC...
java -cp javacc.jar javacc JavaScript.jj
if errorlevel 1 (
    echo [ERRO] Falha ao gerar o parser!
    pause
    exit /b 1
)

echo.
echo [2/3] Compilando classes Java...
javac JavaScript.java
if errorlevel 1 (
    echo [ERRO] Falha ao compilar as classes Java!
    pause
    exit /b 1
)

echo.
echo [3/3] Executando compilador no arquivo de teste...
echo.

if "%1"=="" (
    echo --- Testando: teste.js ---
    java JavaScript teste.js

    echo.
    echo --- Testando erros semanticos: teste_erros.js ---
    java JavaScript teste_erros.js
) else (
    java JavaScript %1
)

pause
