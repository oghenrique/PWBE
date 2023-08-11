/*************************************************************************
 * Objetivo: Criar uma calculadora usando JavaScript
 * Autor: Gustavo Henrique
 * Data: 11/08/2023
 * Versão: 1.0
**************************************************************************/

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Você deseja fazer uma conta de:\nSoma (+)\nSubtração (-)\nMultiplicação (x)\nDivisão (/): ', function (conta) {

    let operacao = conta;

    entradaDeDados.question('Informe o primeiro número: ', function (valor1) {

        let numero1 = valor1.replace(",", ".");

        entradaDeDados.question('Informe o segundo número: ', function (valor2) {

            let numero2 = valor2.replace(",", ".");

            if (operacao === '' || numero1 === '' || numero2 === '') {
                console.log('ERRO: É preciso informar os valores e a operação');
            } else if (isNaN(parseFloat(numero1)) || isNaN(parseFloat(numero2))) {
                console.log('ERRO: É preciso informar os valores numéricos');
            } else {
                let resultado;

                if (operacao === '+') {
                    resultado = parseFloat(numero1) + parseFloat(numero2);
                } else if (operacao === '-') {
                    resultado = parseFloat(numero1) - parseFloat(numero2);
                } else if (operacao === 'x') {
                    resultado = parseFloat(numero1) * parseFloat(numero2);
                } else if (operacao === '/') {
                    resultado = parseFloat(numero1) / parseFloat(numero2);
                } else {
                    console.log('ERRO: Operação inválida');
                    entradaDeDados.close();
                    return;
                }

                console.log(numero1 + ' ' + operacao + ' ' + numero2 + '. Seu resultado é: ' + resultado);
            }

            entradaDeDados.close();
        });
    });
});
