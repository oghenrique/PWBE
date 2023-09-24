/*********************************************************************************
 * Objetivo: Realizar o cálculo de uma tabuada conforme requisitos específicos
 * Autor: Gustavo Henrique
 * Data: 22/09/2023
 * Versão: 1.0
**********************************************************************************/

const calculoTabuada = require('./model/calcularTabuada.js');
const readline = require('readline');

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite a tabuada inicial (entre 2 e 100): ', function (tabuadaInicial) {
    if (!(Number(tabuadaInicial) >= 2 && Number(tabuadaInicial) <= 100)) {
        console.log('ERRO: A tabuada inicial deve ser um número entre 2 e 100.');
        entradaDeDados.close();
        return;
    }

    entradaDeDados.question('Digite a tabuada final (entre 2 e 100): ', function (tabuadaFinal) {
        if (!(Number(tabuadaFinal) >= 2 && Number(tabuadaFinal) <= 100)) {
            console.log('ERRO: A tabuada final deve ser um número entre 2 e 100.');
            entradaDeDados.close();
            return;
        }

        entradaDeDados.question('Digite o contador inicial (entre 1 e 50): ', function (contadorInicial) {
            if (!(Number(contadorInicial) >= 1 && Number(contadorInicial) <= 50)) {
                console.log('ERRO: O contador inicial deve ser um número entre 1 e 50.');
                entradaDeDados.close();
                return;
            }

            entradaDeDados.question('Digite o contador final (entre 1 e 50): ', function (contadorFinal) {
                if (!(Number(contadorFinal) >= 1 && Number(contadorFinal) <= 50)) {
                    console.log('ERRO: O contador final deve ser um número entre 1 e 50.');
                    entradaDeDados.close();
                    return;
                }

                const tabuadaInicialNum = Number(tabuadaInicial);
                const tabuadaFinalNum = Number(tabuadaFinal);
                const contadorInicialNum = Number(contadorInicial);
                const contadorFinalNum = Number(contadorFinal);

                for (let i = tabuadaInicialNum; i <= tabuadaFinalNum; i++) {
                    console.log(`Tabuada do [${i}]`);
                    for (let j = contadorInicialNum; j <= contadorFinalNum; j++) {
                        const resultado = i * j;
                        console.log(`${i} x ${j} = ${resultado}`);
                    }
                }

                entradaDeDados.close();
            });
        });
    });
});
