/*********************************************************************************
 * Objetivo: Fazer uma calculadora que realiza o cálculo IMC
 * Autor: Gustavo Henrique
 * Data: 15/09/2023
 * Versão: 1.0
**********************************************************************************/

function calcularIMC(valorPeso, valorAltura) {
    let altura = Number(valorAltura)
    let peso = Number(valorPeso)

    let imc = peso / Math.pow(altura, 2)

    if (peso == '' || altura == '')
        console.log('ERRO: É obrigatório fornecer todos os valores')
    else if (isNaN(peso) || isNaN(altura))
        console.log('ERRO: Para fazer o cálculo é necesário inserir sua altura e seu peso em números')
    else {


    }
}