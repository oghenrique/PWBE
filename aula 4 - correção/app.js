/*************************************************************************
 * Objetivo: Realizar a entrada de dois valores e a operação matematica 
 * (Somar, Subtrair, Multiplicar e Dividir)
 * Corrigido pelo professor Marcel
 * Autor: Gustavo Henrique
 * Data: 18/08/2023
 * Versão: 1.0
**************************************************************************/

//Import da biblioteca para entrada de dados
var readline = require('readline')

//Cria objeto para realizar as entradas de dados pelo usuario

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do primeiro valor
entradaDeDados.question('Digite o primeiro valor: ', function (numero1) {
    //replace() - permite localizar um caracter e substituit por outro
    let valor1 = numero1.replace(',', '.')

    //Entrada de dados do segundo valor
    entradaDeDados.question('Digite o segundo valor: ', function (numero2) {
        let valor2 = numero2.replace(',', '.')

        //Entrada de dados referente a operação matemática a ser realizada
        entradaDeDados.question('Escolha uma operação a ser realizada: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]: ', function (opcaoMatematica) {

            //toUpperCase() - permite converter uma string em MAISCULO
            //toLowerCase() - permite converter uma string em minusculo

            let operacao = opcaoMatematica.toUpperCase()

            //Validação para entrada de dados vazia
            if (valor1 == '' || valor2 == '') {
                console.log('ERRO: É obrigatório a entrada de valores.')
                //Validação para entrada de caracteres ao invés de números
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: É obrigatório a entrada de valores somente de valores numericos.')

            } else {
                let resultado
                valor1 = Number(valor1)
                valor2 = Number(valor2)

                if (operacao == 'SOMAR')
                    resultado = valor1 + valor2
                else if (operacao == 'SUBTRAIR')
                    resultado = valor1 - valor2
                else if (operacao == 'MULTIPLICAR')
                    resultado = valor1 * valor2
                else if (operacao == 'DIVIDIR')
                    //Validação da divisão por zero                 
                    if (valor2 == 0)
                        console.log('ERRO: Não é possível dividir um número por 0')
                    else
                        resultado = valor1 / valor2
                    else 
                        //Validação de uma operação válida
                        console.log('ERRO: A operação informada não é válida')

                    if(resultado != undefined)
                        console.log(resultado)
            }

    
        })
    })
})