/*********************************************************************************
 * Objetivo: Crie um programa para auxílio de uma loja em um processo de vendas
 * Autor: Gustavo Henrique
 * Data: 25/08/2023
 * Versão: 1.0
**********************************************************************************/

// Opções de Códigos
// Código 1 - À vista, com 8% de desconto
// Código 2 - À vista, com 4% de desconto
// Código 3 - Em 2x, preço normal sem juros
// Código 4 - Em 4x, preço ascrescido de 8%
// Outro - Opção invalida

//Import da biblioteca calculosMatematicos
var calculoDesconto = require('./modulo/desconto.js')
//Import da biblioteca para entrada de dados
var readline = require('readline')

//Cria objeto para realizar as entradas de dados pelo usuario

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Valor do produto em R$: ', function (precoProduto) {
    let valor = precoProduto.replace(",", ".")

    entradaDeDados.question('Escolha uma opção de compra: \n1- Á vista com 8% de desconto \n2- Á vista no cartão \n3- Em 2x, preço normal sem juros \n4- Em 4x, preço acrescido de 8% \n', function (desconto) {
        let codigo = desconto

        switch (true) {
            case valor === '' || codigo === '':
                console.log('ERRO: O CÓDIGO NÃO EXISTE');
                break;
            case Number(codigo) > 4 || Number(codigo) < 1:
                console.log('ERRO: É necessário informar um código entre 1 e 4');
                break;
            default:
                valor = Number(valor);
                codigo = Number(codigo);
                let resposta = calculoDesconto.calcular(valor, codigo);
                console.log(resposta);
                entradaDeDados.close();
                break;
                }
            }
        )
    }
)

