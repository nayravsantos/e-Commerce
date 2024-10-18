// VALIDAÇÕES DE CADASTRO DE USUÁRIO
// BLOCO PARA VALIDAR SE EXISTE NOME DIGITADO
// ----------------------------------------------------------------------------------------------------------------------------------
document.getElementById("nome").addEventListener("focusout", nomeDigitado);
function nomeDigitado() {
    let nome = document.getElementById("nome").value;
    if (nome) {
        document.getElementById("mensagemNome").innerHTML = "";
        document.getElementById("nome").style.borderColor = "green";
 
 
    } else {
        document.getElementById("mensagemNome").style.color = "red";
        document.getElementById("mensagemNome").innerHTML = "Por favor, digite seu nome.";
        document.getElementById("nome").style.borderColor = "red";
    }
}
 
 
// --------------------------------------------------------------------------------------------------------------------------------
// BLOCO PARA VALIDAR SE EXISTE SENHA DIGITADA
 
document.getElementById("senha").addEventListener("focusout", senhaDigitada);
function senhaDigitada() {
    let senha = document.getElementById("senha").value;
    if (senha) {
        document.getElementById("mensagemSenha").innerHTML = "";
        document.getElementById("senha").style.borderColor = "green";
    } else {
        document.getElementById("mensagemSenha").style.color = "red";
        document.getElementById("mensagemSenha").innerHTML = "Por favor, digite sua senha.";
        document.getElementById("senha").style.borderColor = "red";
    }
 
}
 
// BLOCO PARA VALIDAÇÃO DE EMAIL
// ----------------------------------------------------------------------------------------------------------------------------
document.getElementById("email").addEventListener("focusout", checarEmail);
 
function checarEmail() {
    let form2 = document.getElementById("form2");
    if (form2.email.value == "" ||
        form2.email.value.indexOf('@') == -1 ||
        form2.email.value.indexOf('.') == -1) {
 
        document.getElementById('mensagemEmail').style.color = "red";
        document.getElementById('mensagemEmail').innerHTML = "Por favor, preencha seu Email corretamente.";
        document.getElementById("email").style.borderColor = "red";
    } else {
        document.getElementById('mensagemEmail').innerHTML = "";
        document.getElementById("email").style.borderColor = "green";
    }
};
 
 
// -----------------------------------------------------------
 
// CÓDIGO DE VERIFICAÇÃO DE EMAIL DIGITADO
// -----------------------------------------------------------
function verifica() {
    if (document.forms[0].email.value == 0) {
        alert("Por favor informe um e-mail.")
    }
}
 
// ----------------------------------------------------------------------------------------------------------------
// VALIDAÇÃO DE CPF
 
// Adiciona escutador à página
document.getElementById('cpf').addEventListener("focusout", function (event) {
    event.preventDefault();
 
    const cpf = document.getElementById('cpf').value;
    const msg = document.getElementById('mensagemCpf');
 
    if (validarCPF(cpf)) {
        document.getElementById("cpf").style.borderColor = "green";
        msg.innerHTML = "";
    } else {
        msg.innerHTML = "O CPF é inválido!";
        msg.style.color = 'red';
        document.getElementById("cpf").style.borderColor = "red";
    }
}
);
 
// Função de cálculo de validação do CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
 
    // Verificar se o valor informado contem 11 dígitos e se todos são dígitos iguais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
 
    let soma = 0;
    let resto;
 
    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
 
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
 
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
    soma = 0;
 
    // Validar 11 dígito do CPF - 2º dígito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
 
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
 
    return true;
 
}
 
 
'use strict'; // Modo restrito

// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById("logradouro").value = ""; // Rua
    document.getElementById("localidade").value = ""; // Cidade
    document.getElementById("uf").value = ""; // Estado
    document.getElementById("bairro").value = ""; // Bairro
}

// Verifica se a string é um número
const eNumero = (numero) => /^[0-9]+$/.test(numero);

// Valida se o CEP tem 8 dígitos e é numérico
const cepValido = (cep) => cep.length === 8 && eNumero(cep);

// Preenche o formulário com os dados do CEP buscados na API
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;

    // Altera a cor das bordas dos campos
    ['cep', 'logradouro', 'localidade', 'uf', 'bairro'].forEach(id => {
        document.getElementById(id).style.borderColor = "green";
    });
}

// Função assíncrona para consumir a API ViaCep
const pesquisarCep = async () => {
    const cep = document.getElementById("cep");
    limparFormulario();

    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if (cepValido(cep.value)) {
        try {
            const dados = await fetch(url);
            const endereco = await dados.json();

            if (endereco.hasOwnProperty('erro')) {
                // CEP não encontrado
                alert("CEP não encontrado.");
            } else {
                preencherFormulario(endereco);
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        }
    } else {
        document.getElementById("mensagemCep").innerHTML = "Por favor, preencha seu CEP corretamente!";
        ['cep', 'logradouro', 'localidade', 'uf', 'bairro'].forEach(id => {
            document.getElementById(id).style.borderColor = "";
        });
    }
}

// Escutador para executar a função ao sair do campo CEP
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

// Validação do campo Número
const numDigitado = () => {
    const num = document.getElementById("numero").value;
    document.getElementById("numero").style.borderColor = num ? "green" : "";
};
document.getElementById("numero").addEventListener("focusout", numDigitado);

// Validação do campo Complemento
const complementoDigitado = () => {
    const complemento = document.getElementById("complemento").value;
    document.getElementById("complemento").style.borderColor = complemento ? "green" : "";
};
document.getElementById("complemento").addEventListener("focusout", complementoDigitado);

// Ação ao clicar no botão Próximo
document.getElementById("proximo").addEventListener("click", () => {
    const camposObrigatorios = [
        "nome", "senha", "email", "cpf"
    ];
    const camposVazios = camposObrigatorios.some(id => document.getElementById(id).value === "");

    if (camposVazios) {
        document.getElementById("mensagemNome").innerHTML = "Preencha os campos para avançar.";
        document.getElementById("mensagemEmail").innerHTML = "Preencha os campos para avançar.";
        document.getElementById("mensagemSenha").innerHTML = "Preencha os campos para avançar.";
        document.getElementById("mensagemCpf").innerHTML = "Preencha os campos para avançar.";
    } else {
        document.getElementById("form1").classList.add("toggle1");
        document.getElementById("form2").classList.add("toggle2");
        document.getElementById("proximo").style.display = "none";

        camposObrigatorios.forEach(id => {
            document.getElementById(id).value = "";
            document.getElementById(`mensagem${id.charAt(0).toUpperCase() + id.slice(1)}`).innerHTML = "";
        });
    }
});

// Verifica se todos os campos de endereço estão preenchidos
const endCad = () => {
    const camposEndereco = ['logradouro', 'localidade', 'uf', 'bairro', 'cep'];
    const camposVazios = camposEndereco.some(id => document.getElementById(id).value === "");

    if (camposVazios) {
        // Mensagem ou ação caso campos estejam vazios
    } else {
        // Ação caso todos os campos estejam preenchidos
    }
};

endCad();
