/*********************************************************************************
 * Objetivo: Fazer uma calculadora que realiza o cálculo IMC
 * Autor: Gustavo Henrique
 * Data: 15/09/2023
 * Versão: 1.0
**********************************************************************************/

var calculadoraIMC = require('./modulo/calculoIMC.js')

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu peso em KG: ', function (peso) {
    let pesoValor = peso.replace(',', '.')
    entradaDeDados.question('Digite sua altura em metros: ', function (altura) {
        let alturaValor = altura.replace(',', '.')

        entradaDeDados.close()

        if (pesoValor == '' || alturaValor == '') {
            console.log('ERRO: É obrigatório a entrada de valores.')
        }

        var resultado = calculadoraIMC.calcularIMC(pesoValor, alturaValor)
        console.log(resultado)

    })
})
