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
 
 
// VALIDAÇÃO DE CEP
 
'use strict'; // Modo restrito
 
// Este metódo faz com que o JavaScript opere de forma mais segura e rigorosa,
// Consumo de API - https://viacep.com.br/
 
// Função para limpar formulário
const limparFormulario = () => {
    document.getElementById("logradouro").value = ""; //Rua
    document.getElementById("localidade").value = ""; //C
    document.getElementById("uf").value = ""; //E
    document.getElementById("bairro").value = ""; // P  
 
}
// cria regra de expressão regular (Regex) para testar o valor informado pelo usuário
const eNumero = (numero) => /^[0-9]+$/.test(numero);
 
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
// length é uma propriedade que verifica a quantidade de caracteres do argumento cep
 
// Função de preenchimento de formulário com os dados de cep, buscado da API
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;
}
 
// Função de consumo de API  ViaCep
// função assincrona
const pesquisarCep = async () => {
    limparFormulario();
    // Url do tipo JSON
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
 
    // Estrutura de condição
    // Verifica se os argumentos são verdadeiros
    if (cepValido(cep.value)) {
        // Retorna os todos dados do cep digitado pelo usuário
        // await busca e retorna sem erros os dados
        // fetch pesquisa no navegar
        const dados = await fetch(url);
        const addres = await dados.json();
 
        if (addres.hasOwnProperty('erro')) {
            // O método hasOwnProperty()
            // retorna um booleano indicando se o objeto possui a propriedade especificada como uma
            // propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
            // alert("CEP não encontrado");
 
 
        } else {
            preencherFormulario(addres);
            document.getElementById("cep").style.borderColor = "green";
            document.getElementById('logradouro').style.borderColor = "green";
            document.getElementById('localidade').style.borderColor = "green";
            document.getElementById('uf').style.borderColor = "green";
            document.getElementById('bairro').style.borderColor = "green";
         
        }
 
    } else {
        document.getElementById("mensagemCep").innerHTML = "Por favor, preencha seu CEP corretamente!";
        document.getElementById("cep").style.borderColor = "";
        document.getElementById("cep").style.borderColor = "";
        document.getElementById('logradouro').style.borderColor = "";
        document.getElementById('localidade').style.borderColor = "";
        document.getElementById('uf').style.borderColor = "";
        document.getElementById('bairro').style.borderColor = "";
    }
 
}
// Adicionar escutador para executar consumo de API da ViaCEP
document.getElementById("cep").addEventListener("focusout", pesquisarCep); //adicionando escutador de evento
 
 
 
 
function numDigitado() {
    let num = document.getElementById("numero").value;
    if (num) {
        document.getElementById("numero").style.borderColor = "green";
 
    } else {
        document.getElementById("complemento").style.borderColor = "";
    }
}
document.getElementById("numero").addEventListener("focusout", numDigitado)
 
 
function complementoDigitado() {
    let complemento = document.getElementById("complemento").value;
    if (complemento) {
        document.getElementById("complemento").style.borderColor = "green";
    } else {
        document.getElementById("complemento").style.borderColor = "";
    }
}
document.getElementById("complemento").addEventListener("focusout", complementoDigitado);
 
document.getElementById("proximo").addEventListener("click", () => {
    // Funcão que chamara as personalização de css
    // também sera usada somente quando os campos estiverem preeenchidos
    var x = document.getElementById("form1");
    var y = document.getElementById("form2");
 
    if (document.getElementById("nome").value == "" ||
        document.getElementById("senha").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("cpf").value == ""
    ) {
        document.getElementById("mensagemNome").innerHTML = "Preencha os campos para avançar."
        document.getElementById("mensagemEmail").innerHTML = "Preencha os campos para avançar."
        document.getElementById("mensagemSenha").innerHTML = "Preencha os campos para avançar."
        document.getElementById("mensagemCpf").innerHTML = "Preencha os campos para avançar."
 
    } else {
        document.getElementById("form1").classList.add("toggle1");
        document.getElementById("form2").classList.add("toggle2");
        document.getElementById("proximo").style.display = "none";
 
        document.getElementById("mensagemNome").innerHTML = "";
        document.getElementById("mensagemEmail").innerHTML = "";
        document.getElementById("mensagemSenha").innerHTML = "";
        document.getElementById("mensagemCpf").innerHTML = "";
 
        document.getElementById("nome").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cpf").value = "";
    }
 
   
})
 
// Escutador de todos os campos CEP se estão preenchidos e fazer uma transição de saída para o formulário
function endCad() {
    if (document.getElementById('logradouro').value =="" ||
    document.getElementById('localidade').value == ""||
    document.getElementById('uf').value == "" ||
    document.getElementById('bairro').value =="" ||
    document.getElementById("cep").value =="" ){
        document
       
 
    }else{
 
    }
}
endCad();
