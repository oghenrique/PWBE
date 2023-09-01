function calcular(valorVenda, codigoResposta) {
    let valor = valorVenda;
    let codigo = codigoResposta;
    let novoValor;
    let resposta;
    let parcela;

    switch (codigo) {
        case 1:
            novoValor = valor - valor * (8 / 100);
            resposta = `R$:${valor} será cobrado à vista com 8% de desconto = R$:${novoValor.toFixed(2).replace('.', ',')}`;
            break;

        case 2:
            novoValor = valor - valor * (4 / 100);
            resposta = `R$:${valor} será cobrado à vista com 4% de desconto = R$:${novoValor.toFixed(2).replace('.', ',')}`;
            break;

        case 3:
            parcela = valor / 2;
            resposta = `R$:${valor} será parcelado em 2x de ${parcela.toFixed(2).replace('.', ',')}`;
            break;

        default:
            novoValor = valor + valor * (8 / 100);
            parcela = novoValor / 4;
            resposta = `R$:${valor} acrescido em 8% será parcelado em 4x de ${parcela.toFixed(2).replace('.', ',')}`;
            break;
    }

    return resposta;
}

module.exports = {
    calcular
};
