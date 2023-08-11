/*************************************************************************
 * Objetivo: Pedir quatro notas de um aluno e mostrar a média
 * Autor: Gustavo Henrique
 * Data: 04/08/2023
 * Versão: 1.0
**************************************************************************/

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    let nome = nomeUsuario 

    entradaDeDados.question('Digite a primeira nota: ', function(primeiraNota){
        let nota1 = primeiraNota 
        var n1 = parseInt(nota1)

        entradaDeDados.question('Digite a segunda nota: ', function(segundaNota){
            let nota2 = segundaNota 
            var n2 = parseInt(nota2)

            entradaDeDados.question('Digite a terceira nota: ', function(terceiraNota){
                let nota3 = terceiraNota 
                var n3 = parseInt(nota3)

                entradaDeDados.question('Digite a quarta nota: ', function(quartaNota){
                    let nota4 = quartaNota
                    var n4 = parseInt(nota4)

                    var media = (n1 + n2 + n3 + n4)/4 ;
                
    console.log('')            
    console.log('A primeira nota é: ' + nota1)
    console.log('A segunda nota é: ' + nota2)
    console.log('A terceira nota é:  ' + nota3)
    console.log('A quarta nota é:  ' + nota4)
    console.log('')
    console.log('Olá, ' + nome + 'a sua média é:  ' + media)

    entradaDeDados.close()
                
                })
            })
        })
    })
})

