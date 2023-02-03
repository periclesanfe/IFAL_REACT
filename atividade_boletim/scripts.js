function limparDados() {
    document.getElementById('nome').value = '';
    document.getElementById('bimestre1').value = '';
    document.getElementById('bimestre2').value = '';
    document.getElementById('bimestre3').value = '';
    document.getElementById('bimestre4').value = '';
}

function registerEstudent() {

    var nome = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('bimestre1').value);
    var nota2 = parseFloat(document.getElementById('bimestre2').value);
    var nota3 = parseFloat(document.getElementById('bimestre3').value);
    var nota4 = parseFloat(document.getElementById('bimestre4').value);

    total = nota1 + nota2 + nota3 + nota4
    media = total/4

    var novacoluna = document.getElementById('boletim');
    var coluna = novacoluna.insertRow(1);
    var celulaNome = coluna.insertCell(0);
    var totalPontos = coluna.insertCell(1);
    var mediaDoAno = coluna.insertCell(2);
    var situacao = coluna.insertCell(3);
    var provaFinal = coluna.insertCell(4);
    
    celulaNome.innerHTML = nome;
    totalPontos.innerHTML = '  '+total;
    mediaDoAno.innerHTML = media.toFixed(2);

    var notaFinal = document.getElementById('provaFinal').value;

    if (media < 7) {
        if  (media < 4) {
            situacao.innerHTML = 'Reprovado';
            provaFinal.innerHTML = '  --'
        } else {
            situacao.innerHTML = '  Recuperação'
            provaFinal.innerHTML = notaFinal
        }
    } else {
        situacao.innerHTML = 'Aprovado'
        provaFinal.innerHTML = '  --'
    }
    
    return limparDados();
}

/*1- NOTA ANUAL;​
2- SITUAÇÃO DE REPROVADO OU APROVADO;​
3- SE REPROVADO COLOCAR RECUPERAÇÃO E PROVA FINAL.*/