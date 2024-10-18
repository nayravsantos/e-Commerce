# Cadastro de Usuário - Formulário
Este documento detalha o funcionamento do formulário de cadastro de um usuário, contendo campos de endereço e informações pessoais. O código é composto por uma estrutura HTML, juntamente com referências para folhas de estilo CSS e um arquivo JavaScript para validação ou interatividade. Este projeto inclui várias verificações de validação para entradas como nome, senha, e-mail, CPF (ID brasileiro) e CEP (código postal). O formulário fornece feedback imediato aos usuários para aprimorar sua experiência e garantir que todos os campos obrigatórios sejam preenchidos corretamente antes de prosseguir.

## Estrutura do Projeto
 
- **HTML:** `index.html` 
- **CSS:** `style.css`
- **JavaScript:** `script.js`

## Descrição dos Elementos
 
### Cabeçalho `<head>`
 
O cabeçalho contém metadados importantes, como:
- `<meta charset='utf-8'>`: Define a codificação como UTF-8, garantindo suporte para caracteres especiais.
- `<meta http-equiv='X-UA-Compatible' content='IE=edge'>`: Garante a compatibilidade com o Internet Explorer em modo edge.
- `<meta name='viewport' content='width=device-width, initial-scale=1'>`: Torna a página responsiva para diferentes tamanhos de tela.
- Links para arquivos CSS:
   `_css/cad.css`: Provavelmente utilizado para estilizar o layout do formulário. / `_css/elements.css`: Aplicação de estilos adicionais aos elementos HTML.

### Corpo da Página `<body>`
 
O corpo da página contém dois formulários principais, uma seção de imagem e um botão de "Próximo".
 
### Estrutura Geral
 
A página está dividida em duas partes:
- **Esquerda (`<div class="left">`):** Contém os formulários de cadastro e endereço.
- **Direita (`<div class="right">`):** Seção onde uma imagem seria exibida, mas no momento o conteúdo não está especificado.

### Formulário de Endereço (`form1`)
 
Contém os seguintes campos de entrada de dados:
- **CEP**: Campo de texto para inserir o CEP, com um div para exibir mensagens de erro ou status.
- **Cidade**: Campo de texto para inserir a cidade.
- **Bairro**: Campo de texto para inserir o bairro.
- **Estado**: Campo de texto para inserir o estado (UF).
- **Rua**: Campo de texto para inserir o nome da rua.
- **Número**: Campo de texto para o número da residência. Há uma função `oninput` para garantir que somente números sejam inseridos.
- **Complemento**: Campo de texto opcional para complemento de endereço.

### Formulário de Dados Pessoais (`form2`)
 
Contém os seguintes campos:
- **Nome**: Campo de texto para inserir o nome completo. Há um div para mensagens de erro ou validações.
- **Email**: Campo de texto para o e-mail, também com uma área de mensagens.
- **Senha**: Campo de texto para inserção de senha com um div para feedback.
- **CPF**: Campo de texto para inserção do CPF. O JavaScript provavelmente será usado para validar este campo, já que há um div para mensagens.
- **Data de Nascimento**: Campo de seleção de data.
 
### Botão `"Próximo"`
 
O botão de submissão "Próximo" (`<input type="submit" id="proximo" value="Próximo">`) envia os dados inseridos nos dois formulários. A funcionalidade de envio e validação será implementada via JavaScript no arquivo `script.js`.
#
## JavaScript
 
O arquivo `script.js` está vinculado no final da página. Ele será responsável por:
- Validações de campos (como CEP, CPF, e-mail, etc.).
- Exibição de mensagens de erro ou sucesso nos divs associados a cada campo.
- Interações adicionais, como autocompletar o endereço com base no CEP (via API, por exemplo).

### Características:

- **Validação de nome :** garante que o usuário inseriu um nome antes de prosseguir.
- **Validação de senha :** verifica se uma senha foi inserida.
- **Validação de e-mail :** valida o formato do e-mail usando verificações básicas.
- **Validação de CPF :** Utiliza um algoritmo matemático para verificar a validade de um número de CPF brasileiro.
- **Pesquisa CEP :** integra-se com a API ViaCep para preencher automaticamente campos de endereço com base na entrada do código postal.
- **Feedback do usuário :** exibe mensagens para orientar os usuários na correção de quaisquer erros em suas entradas.

### Funções de Validação:
Cada campo de entrada tem uma função de validação associada que dispara quando o foco sai. Se a validação falhar, a mensagem correspondente será exibida em vermelho, e a borda do campo ficará vermelha. Se a validação for bem-sucedida, a borda ficará verde.

### Exemplo de funções de validação
Validação de Nome:
```Javascript
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
```
Exemplo de pesquisa CEP:
```Javascript
const pesquisarCep = async () => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if (cepValido(cep.value)) {
        const dados = await fetch(url);
        const addres = await dados.json();
        if (!addres.erro) {
            preencherFormulario(addres);
            // Update border colors
        }
    } else {
        document.getElementById("mensagemCep").innerHTML = "Por favor, preencha seu CEP corretamente!";
        // Reset border colors
    }
}
```




 