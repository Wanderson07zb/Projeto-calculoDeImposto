function executarScriptJs() {
    let valorBrutoAnual = parseFloat(document.getElementById('valorBrutoAnual').value);
    let salarioMinimo = parseFloat(document.getElementById('salarioMinimo').value);
    //verificar se o número é válido
    if(isNaN(valorBrutoAnual) || valorBrutoAnual < 0) {
        alert("Valor bruto anual informado inválido!!");
    }

    if(isNaN(salarioMinimo) || salarioMinimo < 0) {
        alert("Salario mínimo informado inválido!!");
    } else {
        //chamar a fução
        calcularImposto(valorBrutoAnual, salarioMinimo);
    }

    function calcularImposto(valorBrutoAnual, salarioMinimo) {
        let valorBrutoPorMes = valorBrutoAnual / 12;
        let valorLiquidoAoMes = 0;
        let valorLiquidoPorAno = 0;

        let conteudoHtmlSubs = '<table border="1" cellpadding="5" cellspacing="0">' +
            '<tr id="detalhesTable"><th colspan="2">Detalhes do Imposto de Renda</th></tr>';

        if (valorBrutoPorMes <= 2259.20) {
            valorLiquidoAoMes = valorBrutoPorMes;
            valorLiquidoPorAno = valorBrutoAnual;
            conteudoHtmlSubs +=
                '<tr style="background-color: #ff2d2d;"> <td>CATEGORIA</td> <td>O(A) SENHOR(A) NÃO PAGA IMPOSTO DE RENDA</td> </tr>' +
                '<tr> <td>IMPOSTO (%)</td> <td>0%</td> </tr>' +
                '<tr> <td>IMPOSTO (R$)</td> <td>0</td> </tr>' +
                '<tr> <td>SALÁRIO MÍNIMO (R$)</td> <td>' + salarioMinimo.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO ANUAL (R$)</td> <td>' + valorBrutoAnual.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO POR MÊS (R$)</td> <td>' + valorBrutoPorMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR MÊS (R$)</td> <td>' + valorLiquidoAoMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR ANO (R$)</td> <td>' + valorLiquidoPorAno.toFixed(2) + '</td> </tr>';
        } else if (valorBrutoPorMes <= 2828.65) {
            valorLiquidoAoMes = valorBrutoPorMes - 169.44;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
            conteudoHtmlSubs +=
                '<tr style="background-color: #ff2d2d;"> <td>CATEGORIA</td> <td>VALORES</td> </tr>' +
                '<tr> <td>IMPOSTO (%)</td> <td>7,5%</td> </tr>' +
                '<tr> <td>IMPOSTO (R$)</td> <td>169,44</td> </tr>' +
                '<tr> <td>SALÁRIO MÍNIMO (R$)</td> <td>' + salarioMinimo.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO ANUAL (R$)</td> <td>' + valorBrutoAnual.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO POR MÊS (R$)</td> <td>' + valorBrutoPorMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR MÊS (R$)</td> <td>' + valorLiquidoAoMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR ANO (R$)</td> <td>' + valorLiquidoPorAno.toFixed(2) + '</td> </tr>';
        } else if (valorBrutoPorMes <= 3751.05) {
            valorLiquidoAoMes = valorBrutoPorMes - 381.44;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
            conteudoHtmlSubs +=
                '<tr style="background-color: #ff2d2d;"> <td>CATEGORIA</td> <td>VALORES</td> </tr>' +
                '<tr> <td>IMPOSTO (%)</td> <td>15,0%</td> </tr>' +
                '<tr> <td>IMPOSTO (R$)</td> <td>381,44</td> </tr>' +
                '<tr> <td>SALÁRIO MÍNIMO (R$)</td> <td>' + salarioMinimo.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO ANUAL (R$)</td> <td>' + valorBrutoAnual.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO POR MÊS (R$)</td> <td>' + valorBrutoPorMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR MÊS (R$)</td> <td>' + valorLiquidoAoMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR ANO (R$)</td> <td>' + valorLiquidoPorAno.toFixed(2) + '</td> </tr>';
        } else if (valorBrutoPorMes <= 4664.68) {
            valorLiquidoAoMes = valorBrutoPorMes - 662.77;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
            conteudoHtmlSubs +=
                '<tr style="background-color: #ff2d2d;"> <td>CATEGORIA</td> <td>VALORES</td> </tr>' +
                '<tr> <td>IMPOSTO (%)</td> <td>22,5%</td> </tr>' +
                '<tr> <td>IMPOSTO (R$)</td> <td>662,77</td> </tr>' +
                '<tr> <td>SALÁRIO MÍNIMO (R$)</td> <td>' + salarioMinimo.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO ANUAL (R$)</td> <td>' + valorBrutoAnual.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO POR MÊS (R$)</td> <td>' + valorBrutoPorMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR MÊS (R$)</td> <td>' + valorLiquidoAoMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR ANO (R$)</td> <td>' + valorLiquidoPorAno.toFixed(2) + '</td> </tr>';
        } else if (valorBrutoPorMes > 4664.68) {
            valorLiquidoAoMes = valorBrutoPorMes - 896.00;
            valorLiquidoPorAno = valorLiquidoAoMes * 12;
            conteudoHtmlSubs +=
                '<tr style="background-color: #ff2d2d;"> <td>CATEGORIA</td> <td>VALORES</td> </tr>' +
                '<tr> <td>IMPOSTO (%)</td> <td>27,5%</td> </tr>' +
                '<tr> <td>IMPOSTO (R$)</td> <td>896,00</td> </tr>' +
                '<tr> <td>SALÁRIO MÍNIMO (R$)</td> <td>' + salarioMinimo.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO ANUAL (R$)</td> <td>' + valorBrutoAnual.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR BRUTO POR MÊS (R$)</td> <td>' + valorBrutoPorMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR MÊS (R$)</td> <td>' + valorLiquidoAoMes.toFixed(2) + '</td> </tr>' +
                '<tr> <td>VALOR LÍQUIDO POR ANO (R$)</td> <td>' + valorLiquidoPorAno.toFixed(2) + '</td> </tr>';
        }

        // Atribui à variavel conteudoHtmlSubs o valor dela + </table> no final do html inserido
        conteudoHtmlSubs += '</table>';

        document.getElementById('tabela').innerHTML = conteudoHtmlSubs;
    }
}