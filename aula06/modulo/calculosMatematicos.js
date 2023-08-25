//Modelo tradicional de criar uma função
function calculdora(numero1, numero2, tipoCalculo) {
    //recebendo dados de argumentos da funçõa
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado

    switch (operacao) {
        case "SOMAR":
        case "+":
            resultado = valor1 + valor2
            break;
        case "SUBTRAIR":
        case "-":
            resultado = valor1 - valor2
            break;
        case "MULTIPLICAR":
        case "*":
            resultado = valor1 * valor2
            break;
        case "DIVIDIR":
        case "/":
            if (valor2 == 0)
                console.log('ERRO: Não é possível dividir um número por 0')
            else
                resultado = valor1 / valor2
            break;

        default:
            console.log('ERRO: A operação informada não é válida')
            break;
    }

    if (resultado != undefined)
        return resultado
    else
        return false


}

module.exports = {
    calculdora
}