/*********************************************************************************
 * Objetivo: Realizar calculos com Par e Ímpar
 * Autor: Gustavo Henrique
 * Data: 29/09/2023
 * Versão: 1.0
**********************************************************************************/

var gerenciarNumeros = require('./modulo/parImpar.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira um numero inicial entre 0 e 500: ', function(valorInicial){
    let valorIni = valorInicial

    entradaDeDados.question('Insira o número final entre 100 e 1000: ', function(valorFinal){
        let valorFin = valorFinal

        entradaDeDados.question('Escolha como separar os números [1- Pares | 2- Ímpares | 3- Ambos]: ', function (escolhaUsuario){
            let escolha = escolhaUsuario

            gerenciarNumeros.verificarValores(valorIni, valorFin, escolha)
        })
    })
})