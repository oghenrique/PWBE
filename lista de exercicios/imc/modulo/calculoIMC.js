/*********************************************************************************
 * Objetivo: Fazer uma calculadora que realiza o cálculo IMC
 * Autor: Gustavo Henrique
 * Data: 15/09/2023
 * Versão: 1.0
**********************************************************************************/

function calcularIMC(pesoValor, alturaValor) {
    let altura = Number(alturaValor)
    let peso = Number(pesoValor)

    if (isNaN(peso) || isNaN(altura)) {
        console.log('ERRO: Para fazer o cálculo é necessário inserir sua altura e seu peso em números')
    }
    if (peso <= 0 || altura <= 0) {
        console.log('ERRO: O peso e a altura devem ser maiores que zero')
    }
    else {
        let imc = peso / Math.pow(altura, 2)
        let classificacao

        if (imc < 18.5) {
            classificacao = 'Abaixo do Peso'
        } else if (imc < 24.9) {
            classificacao = 'Peso Normal'
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso'
        } else if (imc < 34.9) {
            classificacao = 'Obesidade Grau 1'
        } else if (imc < 39.9) {
            classificacao = 'Obesidade Grau 2'
        } else {
            classificacao = 'Obesidade Grau 3'
        }

        return `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`
    }
}

module.exports = {
    calcularIMC
};
