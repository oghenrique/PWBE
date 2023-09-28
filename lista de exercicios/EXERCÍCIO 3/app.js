/*********************************************************************************
 * Objetivo: Realizar o cálculo de uma tabuada conforme requisitos específicos
 * Autor: Gustavo Henrique
 * Data: 22/09/2023
 * Versão: 1.0
**********************************************************************************/

var gerenciarTabuada = require('./modulo/calcularTabuada.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira a tabuada inicial [2 - 100]: ', function(tabuadaInicial){
    let tabInicial = tabuadaInicial

    entradaDeDados.question('Insira a tabuada final [2 - 100]: ', function(tabuadaFinal){
        let tabFinal = tabuadaFinal

        entradaDeDados.question('Insira o contador inicial [1 - 50]: ', function(contadorInicial){
            let contInicial = contadorInicial

            entradaDeDados.question('Insira o contador final [1 - 50]: ', function(contadorFinal){
                let contFinal = contadorFinal

                gerenciarTabuada.calcularTabuada(contInicial, contFinal, tabInicial, tabFinal)
            })
        })
    })
})