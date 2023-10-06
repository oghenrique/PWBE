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

    listaDeProdutos.forEach(function (produto) {
        if (produto.toUpperCase == nome.toUpperCase)
            status = true

    })

    return status
}

const manipulandoArrayJson = function () {
    /*
    [] -> Array
    {} -> JSON
        Ex: { atributo: valor}
            {nome: 'josé', telefone: '123456789'}
    */

    let contato = { nome: 'José da Silva', telefone: '123456789', email: 'jose@gmail.com' }
    let contato2 = { nome: 'Maria da Silva', telefone: '87654', email: 'maria@gmail.com' }
    let contato3 = { nome: 'João da Silva', telefone: '76733455', email: 'joao@gmail.com' }

    //Adicionando elementos individuais nos objetos JSON
    contato.celular = '988009363'
    contato.data_nascimento = '2007-10-09'

    contato2.celular = '543654486'


    //Criando um array de dados com o JSON
    let arrayContatos = [contato, contato2, contato3]


    // console.table(arrayContatos)
    // console.log(arrayContatos[1].nome)

    arrayContatos.forEach(function (dadosContato) {
        console.log('Nome: ' + dadosContato.nome)
        console.log('Telefone: ' + dadosContato.telefone)
        console.log('Email: ' + dadosContato.email)
        //tratamento de dados para quando não houver conteudo
        if (dadosContato.celular != undefined)
            console.log('Celular: ' + dadosContato.celular)
        if (dadosContato.data_nascimento != undefined)
            console.log('Data de nascimento: ' + dadosContato.data_nascimento)

        console.log('################################# \n')
    })
}

const cadastrarProdutos = function () {

    //Cria o objeto array para guardar todos os produtos
    let arrayProdutos = []
    //Cria o objeto Json para colocar o array de produtos
    let jsonProdutos = {}


    let listaDeMarcas = [
        { id: 1, nome_marca: 'Dell' },
        { id: 2, nome_marca: 'Apple' },
        { id: 3, nome_marca: 'Lenovo' },
        { id: 4, nome_marca: 'Positivo' },
        { id: 5, nome_marca: 'Razer' },
        { id: 6, nome_marca: 'Logitech' },
        { id: 7, nome_marca: 'Multilaser' }
    ]

    let listaDeCategorias = [
        { id: 1, nome_categoria: 'Periferico', descricao_categoria: 'Perifericos de computadores' },
        { id: 2, nome_categoria: 'Hardware', descricao_categoria: 'Hardware para montar computadores' },
        { id: 3, nome_categoria: 'Computador', descricao_categoria: 'Computadores completos' },
        { id: 4, nome_categoria: 'Games', descricao_categoria: 'Acessorios para games' }
    ]

    let listaDeSituacao = [
        { id: 1, situacao: 'Novo' },
        { id: 2, situacao: 'Semi-Novo' },

    ]

    let listaDeCores = [
        { id: 1, nome_cor: 'Branco' },
        { id: 2, nome_cor: 'Preto' },
        { id: 3, nome_cor: 'Cinza' },
        { id: 4, nome_cor: 'Vermelho' },
        { id: 5, nome_cor: 'Azul' }
    ]

    let produto1 = {
        nome: 'Mouse',
        descricao: 'Mouse optico com fio',
        qtde: 50,
        valor: 60.00,
        marca: listaDeMarcas[0],
        categoria: listaDeCategorias[0],
        situacao: listaDeSituacao[0],
        cor: [
            listaDeCores[0],
            listaDeCores[1],
            listaDeCores[2]

            ]
    }
    let produto2 = {
        nome: 'Teclado',
        descricao: 'Teclado muito rápido',
        qtde: 21,
        valor: 100.00,
        marca: listaDeMarcas[4],
        categoria: listaDeCategorias[0],
        situacao: listaDeSituacao[1],
        cor: listaDeCores
    }

    //Adiciona os produtos em um array de produtos
    arrayProdutos.push(produto1)
    arrayProdutos.push(produto2)

    //Adiciona o array com todos os produtos em um JSON
    jsonProdutos.lista_produtos = arrayProdutos
    //Retorna a qtde de itens no JSON
    jsonProdutos.count = arrayProdutos.length

    console.log(jsonProdutos)
}

cadastrarProdutos()
// manipulandoArrayJson()
// percorrendoArray()
// introducaoArray()