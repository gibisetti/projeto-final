
// function receita() {
//     let salario = parseFloat(document.getElementById("salario").value);
//     let ganhos = parseFloat(document.getElementById("ganhos").value);

//     let resultado = salario + ganhos;
//     document.getElementById('total-receita').innerHTML = resultado;
// }


// function despesas() {
//     let cigarro = parseFloat(document.getElementById("cigarro").value);
//     let poupanca = parseFloat(document.getElementById("poupanca").value);
//     let previdencia = parseFloat(document.getElementById("previdencia").value);

//     let resultado = (cigarro + poupanca + previdencia);
//     document.getElementById('total-despesas').innerHTML = resultado;
// }


// function diferenca() {
//     let receita = parseFloat(document.getElementById("total-receita").value);
//     let despesas = parseFloat(document.getElementById("total-despesas").value);

//     let resultado = (receita - despesas);
//     document.getElementById('total-diferenca').innerHTML = resultado;
// }



function totais() {
    let salario = parseFloat(document.getElementById("salario").value);
    let ganhos = parseFloat(document.getElementById("ganhos").value);
    let resultadoReceita = salario + ganhos;

    document.getElementById('total-receita').innerHTML = resultadoReceita;

    let cigarro = parseFloat(document.getElementById("cigarro").value);
    let poupanca = parseFloat(document.getElementById("poupanca").value);
    let previdencia = parseFloat(document.getElementById("previdencia").value);

    let resultadoDespesas = (cigarro + poupanca + previdencia);
    document.getElementById('total-despesas').innerHTML = resultadoDespesas;

    let receita = resultadoReceita;
    let despesas = resultadoDespesas;

    let diferenca = (receita - despesas);
    document.getElementById('total-diferenca').innerHTML = diferenca;
}
