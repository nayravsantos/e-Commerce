document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;

    if (!validateEmail(email)) {
        displayError('E-mail inválido.');
        return;
    }

    if (!validateCPF(cpf)) {
        displayError('CPF inválido.');
        return;
    }

    // Aqui você pode enviar os dados para o servidor
    alert('Cadastro realizado com sucesso!');
});

document.getElementById('search-address').addEventListener('click', function() {
    const address = document.getElementById('address').value;
    // Consumo de API para buscar endereço pode ser implementado aqui
    alert(`Buscando informações para o endereço: ${address}`);
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateCPF(cpf) {
    // Adicione aqui a lógica de validação de CPF
    return true; // Modifique para retornar false em caso de CPF inválido
}

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    setTimeout(() => {
        errorMessage.textContent = '';
    }, 3000);
}
.