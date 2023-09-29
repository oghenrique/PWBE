/*********************************************************************************
 * Objetivo:
 * Autor: Gustavo Henrique
 * Data: 01/09/2023
 * Versão: 1.0
**********************************************************************************/

var calculoTabuada = require('./modulo/calcularTabuada.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite uma tabuada: ', function (valorTabuada) {
    let tabuada = valorTabuada

    entradaDeDados.question('Digite o valor do contador Inicial: ', function (valorContadorInicial) {
        let contadorInicial = valorContadorInicial

        entradaDeDados.question('Digite o valor do contador Final: ', function (valorContadorFinal) {
            let contadorFinal = valorContadorFinal

            calculoTabuada.gerarTabuada(tabuada, contadorInicial, contadorFinal)

        })
    })
})