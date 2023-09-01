/*********************************************************************************
 * Objetivo: Reaizar o cálculo de uma tabuada atravé de estruturas de repetição
 * Autor: Gustavo Henrique
 * Data: 01/09/2023
 * Versão: 1.0
**********************************************************************************/

//Função para gerar uma tabuada
const gerarTabuada = function (valorTabuada, contadorInicial, contadorFinal) {

    //Entradas de dados que vieram pelos argumentos da função 
    let tabuada = valorTabuada
    let contInicial = contadorInicial
    let contFinal = contadorFinal

    let resultado
    let status = false

    //Validação para deixar os valores em ordem crescente
    if (contFinal < contInicial) {
        contInicial = contadorFinal
        contFinal = contadorInicial
    }

    //Validação de dados vazios ou de caracteres inválidos
    if (contInicial == '' || contFinal == '' || tabuada == '')
        console.log('ERRO: É obrigatório fornecer todos os valores')
    else if (isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada))
        console.log('ERRO: É obrigatório a entrada somente de números.')
    else {

        //Convertenso String para Number
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
        //Exemplo de While
        while (contInicial <= contFinal) {
            resultado = tabuada * contInicial
            console.log(`${tabuada} x ${contInicial} = ${resultado}`)
            contInicial++
            
            status = true
        }
    }

    return status
}

console.log(gerarTabuada('2' ,'0', '10'))