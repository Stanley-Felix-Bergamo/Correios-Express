$(document).ready(function () {

    validaCampo()
    criarMascara();

    $('form').on('submit', function (e) {
        e.preventDefault();
        alert('Cadastro realizado com sucesso !');
        limaparCampos();
    });

});

function criarMascara() {
    $('#telefone').mask('(00) 0000-0000');
    $("#cpf").mask("999.999.999-99");
    $("#cep").mask("99.999-999");
    $('#casa').mask('0000');
}

function validaCampo() {
    $('#nome').focusout(function () {

        const nome = $('#nome').val();
        const span = $('.form-campo span');

        if (validaNome(nome)) {
            span.removeClass('erro');
            span.text('');

        } else {
            span.addClass('erro');
            span.text('O nome precisa ser completo !');
        }
    });
}

function validaNome(nome) {
    const nomeArray = nome.split(' ');
    return nomeArray.length >= 2;
}

function limaparCampos() {
    $('#nome').val('');
    $('#email').val('');
    $('#telefone').val('');
    $('#cpf').val('');
    $('#cep').val('');
    $('#casa').val('');
}


