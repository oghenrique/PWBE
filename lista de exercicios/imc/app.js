/*********************************************************************************
 * Objetivo: Fazer uma calculadora que realiza o cálculo IMC
 * Autor: Gustavo Henrique
 * Data: 15/09/2023
 * Versão: 1.0
**********************************************************************************/

var calculadoraIMC = require('./modulo/calculadoraIMC.js'); // Substitua 'calculadoraIMC.js' pelo nome do seu arquivo

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite seu peso em KG: ', function (peso) {
    entradaDeDados.question('Digite sua altura em metros: ', function (altura) {
        var resultado = calculadoraIMC.calcularIMC(peso, altura);
        console.log(resultado);
        entradaDeDados.close();
    });
});
