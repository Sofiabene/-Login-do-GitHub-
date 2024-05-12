document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var username = document.getElementById('user').value;
        var password = document.getElementById('password').value;

        if (!username || !password) {
            event.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
            alert('Por favor, preencha todos os campos.');
        }
    });
});
