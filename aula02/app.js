/*************************************************************************
 * Objetivo: Manipular entrada de dados via teclado no terminal
 * Autor: Gustavo Henrique
 * Data: 04/08/2023
 * Versão: 1.0
**************************************************************************/

//Import da biblioteca readline, que recebe dados digitados pelo usuário no terminal
var readline = require('readline')

//Cria um elemento para entrada de dados do usuário via teclado
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicita a entrada de dados no terminal, através de uma função de Callback no metodo question
entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    //Recebe a variável nome o conteúdo digitado pelo usuário
    var nome = nomeUsuario

    entradaDeDados.question('Digite sua idade: ', function(idadeUsuario){
        var idade = idadeUsuario

        //Exibe na tela um texto e a variável
      console.log('Bem vindo ao app, ' + nome)
      console.log('A idade do usuário é, ' + idade)
    }) 
})