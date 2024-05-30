$(document).ready(function() {
    $('#cep').on('blur', function() {
        var cep = $(this).val().replace(/\D/g, '');

        if (cep !== "") {
            var validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {
                $('#endereco').val('...');
                
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {
                        $('#endereco').val(dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + ' - ' + dados.uf);
                    } else {
                        alert("CEP não encontrado.");
                        $('#endereco').val("");
                    }
                });
            } else {
                alert("Formato de CEP inválido.");
                $('#endereco').val("");
            }
        } else {
            $('#endereco').val("");
        }
    });
});
