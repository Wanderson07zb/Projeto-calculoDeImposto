function executarScriptJs() {
    let valorBrutoAnual = parseFloat(document.getElementById('valorBrutoAnual').value);
    let salarioMinimo = parseFloat(document.getElementById('salarioMinimo').value);
    //verificar se o número é válido
    if (isNaN(valorBrutoAnual) || valorBrutoAnual < 0) {
        alert("Valor bruto anual informado inválido");
        return;
    }

    if (isNaN(salarioMinimo) || salarioMinimo < 0) {
        alert("Salario mínimo informado inválido");
        return;
    }
    
    calcularImposto(valorBrutoAnual, salarioMinimo);
    

    function calcularImposto(valorBrutoAnual, salarioMinimo) {
        // Variaveis para calculo do imposto por: Mês e Ano
        let valorBrutoPorMes = valorBrutoAnual / 12;
        let valorLiquidoAoMes;
        let valorLiquidoPorAno;
        // Mensagens adicional nas colunas da tabela
        let impostoPorcentagem;
        let impostoReal;
        let mensagem = "VALORES";
        // Parcelas a deduzir do IR
        let aliquotaDeSetePontoCincoPorCento = 169.44;
        let aliquotaDeQuinzePorCento = 381.44;
        let aliquotaDeVinteEDoisPontoCincoPorCento = 662.77;
        let aliquotaDeVinteESetePontoCincoPorCento = 896.00;

        // Verificação de condições de dedução pelo IR
        if (valorBrutoPorMes <= 2259.20) {
            impostoPorcentagem = 0;
            impostoReal = 0;
            mensagem = "O(A) SENHOR(A) NÃO PAGA IMPOSTO DE RENDA"
            valorLiquidoAoMes = valorBrutoPorMes;
            valorLiquidoPorAno = valorBrutoAnual;
        }
        else if (valorBrutoPorMes <= 2828.65) {
            impostoPorcentagem = 7.5;
            impostoReal =  169.44;
            valorLiquidoAoMes = valorBrutoPorMes - aliquotaDeSetePontoCincoPorCento;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
        }
        else if (valorBrutoPorMes <= 3751.05) {
            impostoPorcentagem = 15;
            impostoReal =  381.44;
            valorLiquidoAoMes = valorBrutoPorMes - aliquotaDeQuinzePorCento;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
        }
        else if (valorBrutoPorMes <= 4664.68) {
            impostoPorcentagem = 22.5;
            impostoReal =  662.77;
            valorLiquidoAoMes = valorBrutoPorMes - aliquotaDeVinteEDoisPontoCincoPorCento;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
        }
        else if (valorBrutoPorMes > 4664.68) {
            impostoPorcentagem = 27.5;
            impostoReal = 896.00;
            valorLiquidoAoMes = valorBrutoPorMes - aliquotaDeVinteESetePontoCincoPorCento;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
        }

        // Chamar a função criarTabelaIR
        criarTabelaIR(salarioMinimo, valorBrutoAnual, valorBrutoPorMes, valorLiquidoPorAno, valorLiquidoAoMes, impostoPorcentagem, impostoReal, mensagem)


    }

    function criarTabelaIR(salarioMinimo, valorBrutoAnual, valorBrutoPorMes, valorLiquidoPorAno, valorLiquidoAoMes, impostoPorcentagem, impostoReal, mensagem) {
        
        // Substituir ponto por vírgula
        let conversaoImpostoPorcentagem = impostoPorcentagem.toFixed(2).toString().replace(".", ",");
        let conversaoImpostoReal = impostoReal.toFixed(2).toString().replace(".", ",");
        let conversaoSalarioMinimo = salarioMinimo.toFixed(2).toString().replace(".", ",");
        let conversaoValorBrutoAnual = valorBrutoAnual.toFixed(2).toString().replace(".", ",");
        let conversaoValorLiquidoPorAno = valorLiquidoPorAno.toFixed(2).toString().replace(".", ",");
        let conversaoValorBrutoPorMes = valorBrutoPorMes.toFixed(2).toString().replace(".", ",");
        let conversaoValorLiquidoAoMes = valorLiquidoAoMes.toFixed(2).toString().replace(".", ",");

        let conteudoHtmlSubs = 
        '<table border="1" cellpadding="5" cellspacing="0">' +
           '<tr> <th id="detalhesTable" colspan="2">Detalhes do Imposto de Renda</th> </tr>' +
                '<tr id="fundoColorBackground"> <td>CATEGORIA</td> <td>' + mensagem + ' </td> </tr>' +
                '<tr> <td>IMPOSTO (%)</td> <td>' + conversaoImpostoPorcentagem + '% </td> </tr>' +
                '<tr> <td>IMPOSTO (R$)</td> <td>' + conversaoImpostoReal + '</td> </tr>' +
                '<tr> <td>SALÁRIO MÍNIMO (R$)</td> <td>' + conversaoSalarioMinimo + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO ANUAL (R$)</td> <td>' + conversaoValorBrutoAnual + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO ANUAL (R$)</td> <td>' + conversaoValorLiquidoPorAno + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO MENSAL (R$)</td> <td>' + conversaoValorBrutoPorMes + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO MENSAL (R$)</td> <td>' + conversaoValorLiquidoAoMes + '</td> </tr>' +
        '</table>';

        // Inserir a tabela no html
        document.getElementById('tabela').innerHTML = conteudoHtmlSubs
    }
}