$(document).ready(function () {
    criarMascara();
});

function criarMascara() {
    $('#telefone').mask('(00) 0000-0000');
    $("#cpf").mask("999.999.999-99");
    $("#cep").mask("99.999-999");
    $('#casa').mask('0000');
}

