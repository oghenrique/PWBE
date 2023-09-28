/*********************************************************************************
 * Objetivo: Realizar o cálculo de uma tabuada conforme requisitos específicos
 * Autor: Gustavo Henrique
 * Data: 22/09/2023
 * Versão: 1.0
**********************************************************************************/

const criarTabuada = (tabuada, inicioContador, fimContador) => {
    console.log(`Tabuada do [${tabuada}]`)
    for (let i = inicioContador; i <= fimContador; i++) {
        const resultado = tabuada * i
        console.log(`${tabuada} x ${i} = ${resultado}`)
    }
}

const calcularTabuada = (contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal) => {
    tabuadaInicial = parseInt(tabuadaInicial)
    tabuadaFinal = parseInt(tabuadaFinal)
    contadorInicial = parseInt(contadorInicial)
    contadorFinal = parseInt(contadorFinal)

    if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal)) {
        console.log("ERRO: Todos os valores devem ser números.")
        return
    }

    if (tabuadaInicial < 2 || tabuadaFinal > 100 || tabuadaInicial > 100 || tabuadaFinal < 2 ||
        contadorInicial < 1 || contadorFinal > 50 || contadorInicial > 50 || contadorFinal < 1) {
        console.log("ERRO: Valores fora dos limites permitidos.")
        return
    }

    for (let tabuada = tabuadaInicial; tabuada <= tabuadaFinal; tabuada++) {
        criarTabuada(tabuada, contadorInicial, contadorFinal)
    }
}

module.exports = {
    calcularTabuada
}
