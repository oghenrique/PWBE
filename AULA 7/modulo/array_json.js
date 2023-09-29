/*********************************************************************************
 * Objetivo: Aprender a trabalhar com estruturas de dados array e json
 * Autor: Gustavo Henrique
 * Data: 29/09/2023
 * Versão: 1.0
**********************************************************************************/

//[] -> Representa a estrutura array
//{} -> Representa a estrutura JSON

const introducaoArray = function () {
    //Criando um array de formamanual
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo']

    //Exibe os dados do array
    console.log(listaDeNomes)
    //Exibe os dados do array em forssmato de tabela
    console.table(listaDeNomes)
    //Retorna a quantidade de elementos de um array
    console.log(listaDeNomes.length)
    //Adiciona elementos novos no final da lista
    listaDeNomes.push('Roberto')
    //Adiciona elementos novos no inicio da lista
    listaDeNomes.unshift('Ricardo')
    console.table(listaDeNomes)
    //Remove elementos no final de um array
    listaDeNomes.pop()
    //Remove os elementos no inicio de uma array
    listaDeNomes.shift()
    console.table(listaDeNomes)
    //Remove um elemento baseado no indice, podendo definir a qtde de itens a serem excluidos
    //Ex:splice(2,3) -> 2 é referente ao indice e 3 é referente a qtde de itens
    listaDeNomes.splice(2, 1)
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva', 'Ricardo Borges', 'Jõao da Silva', 10, true)
    console.table(listaDeNomes)
    //typeof - Retorna o tipo de dados de um elementos
    console.log(typeof (listaDeNomes[9]))
}

const percorrendoArray = function () {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    // //While
    // let cont = 0
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont])
    //     cont++
    // }

    //FOR
    // for(let cont = 0; cont < listaDeProdutos.length; cont++){
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont])
    // }

    //ForEach
    //     listaDeProdutos.forEach(function(produto, indice) {
    //         console.log(indice + '- Nome do Produto: ' + produto)

    //     });

    //Retorna o índice do elemento que foi encontrado
    //Caso não exista o item buscado retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'))

    //Torna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Mouse'))
}

const filtrarProduto = function (nomeProduto) {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']
    let nome = nomeProduto

    let status = false
   
    // if (listaDeProdutos.indexOf(nome) >= 0)
    //     status = true
    // else status = false

    // return listaDeProdutos.includes(nome)

    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase == nome.toUpperCase)
            status = true

    })

    return status
}

console.log(filtrarProduto('mOuSe'))

// percorrendoArray()
// introducaoArray()