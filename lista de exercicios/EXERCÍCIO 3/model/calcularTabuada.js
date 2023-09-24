/*********************************************************************************
 * Objetivo: Reaizar o cálculo de uma tabuada através de estruturas de repetição
 * Autor: Gustavo Henrique
 * Data: 22/09/2023
 * Versão: 1.0
**********************************************************************************/
const gerarTabuada = function (valorTabuada, contadorInicial, contadorFinal) {

    let tabuada = valorTabuada
    let contInicial = contadorInicial;
    let contFinal = contadorFinal

    let resultado
    let status = false

    if (Number(contFinal) < Number(contInicial)) {
        contInicial = contadorFinal
        contFinal = contadorInicial
    }

    if (contInicial === '' || contFinal === '' || tabuada === '') {
        console.log('ERRO: É obrigatório fornecer todos os valores')
    } else if (isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada)) {
        console.log('ERRO: É obrigatório a entrada somente de números.')
    } else {

        contInicial = Number(contInicial)
        contFinal = Number(contFinal)

        for (; contInicial <= contFinal; contInicial++) {
            resultado = tabuada * contInicial;
            console.log(`${tabuada} x ${contInicial} = ${resultado}`)
            status = true
        }
    }

    return status
}

module.exports = {
    gerarTabuada
}
