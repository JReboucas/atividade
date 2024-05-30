$(document).ready(function() {
    $('#cadastroForm').on('submit', function(event) {
        event.preventDefault();
        var email = $('#email').val();
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }
        alert('Formulário enviado com sucesso!');
    });

    function validateEmail(email) {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
