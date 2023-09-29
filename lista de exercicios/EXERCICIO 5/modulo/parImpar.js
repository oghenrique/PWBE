/*********************************************************************************
 * Objetivo: Realizar calculos com Par e Ímpar
 * Autor: Gustavo Henrique
 * Data: 29/09/2023
 * Versão: 1.0
**********************************************************************************/

function validarEntradas(numeroInicial, numeroFinal) {
    if (numeroInicial < 0 || numeroInicial > 500 || numeroFinal < 100 || numeroFinal > 1000) {
        return false
    }
    if (numeroInicial >= numeroFinal) {
        return false
    }
    return true
}

function verificarValores(numeroInicial, numeroFinal, escolha) {
    const numeroInicialValido = parseInt(numeroInicial)
    const numeroFinalValido = parseInt(numeroFinal)

    if (Number.isNaN(numeroInicialValido) || Number.isNaN(numeroFinalValido)) {
        console.log('Entrada inválida. Certifique-se de que ambos os valores foram inseridos corretamente.')
        return
    }

    if (!validarEntradas(numeroInicialValido, numeroFinalValido)) {
        console.log('Veja se os valores estão dentro do limite.')
        return
    }

    switch (escolha) {
        case '1':
        case '2':
            const tipoNumero = (escolha === '1') ? 'Números Pares:' : 'Números Ímpares:'
            console.log(tipoNumero)
            for (let i = numeroInicialValido; i <= numeroFinalValido; i++) {
                if ((i % 2 === 0 && escolha === '1') || (i % 2 !== 0 && escolha === '2')) {
                    console.log(i)
                }
            }
            break
        case '3':
            console.log('Números Pares:')
            for (let i = numeroInicialValido; i <= numeroFinalValido; i++) {
                if (i % 2 === 0) {
                    console.log(i)
                }
            }
            console.log('Números Ímpares:')
            for (let i = numeroInicialValido; i <= numeroFinalValido; i++) {
                if (i % 2 !== 0) {
                    console.log(i)
                }
            }
            break
        default:
            console.log('Opção inválida. Tente novamente.')
            break
    }
}

module.exports = {
    verificarValores
}