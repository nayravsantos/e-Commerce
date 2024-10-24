# Cadastro de Usuário - Formulário
Este documento detalha o funcionamento do formulário de cadastro de um usuário, contendo campos de endereço e informações pessoais. O código é composto por uma estrutura HTML, juntamente com referências para folhas de estilo CSS e um arquivo JavaScript para validação ou interatividade. Este projeto inclui várias verificações de validação para entradas como nome, senha, e-mail, CPF (ID brasileiro) e CEP (código postal). O formulário fornece feedback imediato aos usuários para aprimorar sua experiência e garantir que todos os campos obrigatórios sejam preenchidos corretamente antes de prosseguir.

## Estrutura do Projeto
 
- **HTML:** `index.html` 
- **CSS:** `style.css`
- **JavaScript:** `script.js`

## Estrutura do Código
### Eventos do Formulário
- **Evento de submissão do formulário:** Adiciona um ouvinte ao evento de submissão do formulário que impede o comportamento padrão, valida os campos de e-mail e CPF, e exibe mensagens de erro se necessário.

## Funções Principais
**1. validateEmail(email):**
- Recebe um e-mail como entrada.
- Retorna true se o e-mail estiver em um formato válido, false caso contrário.

``` JavaScript
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
```

**2. validateCPF(cpf):**
- Recebe um CPF como entrada.
- Implementa a lógica de validação (a ser concluída).
- Retorna true ou false dependendo da validade.

```Javascript
function validateCPF(cpf) {
    // Adicione aqui a lógica de validação de CPF
    return true; // Modifique para retornar false em caso de CPF inválido
}
```

**3. displayError(message):**
- Recebe uma mensagem de erro como entrada.
- Exibe a mensagem de erro por 3 segundos.

```JavaScript
function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    setTimeout(() => {
        errorMessage.textContent = '';
    }, 3000);
}
```

**Busca de Endereço**
- Um ouvinte de evento para um botão de busca de endereço (presumido) que pode ser usado para consumir uma API e buscar informações de endereço.

```JavaScript
document.getElementById('search-address').addEventListener('click', function() {
    const address = document.getElementById('address').value;
    // Consumo de API para buscar endereço pode ser implementado aqui
    alert(`Buscando informações para o endereço: ${address}`);
});
```

## Instruções de Uso
**1. Integração com o HTML:** Certifique-se de que o JavaScript está corretamente vinculado ao seu arquivo HTML.

**2. Preenchimento do Formulário:** Os usuários devem preencher os campos necessários e clicar em "Cadastrar".

**3. Validação:** O código irá validar os campos de e-mail e CPF. Se algum campo estiver inválido, uma mensagem de erro será exibida.

**4. Sucesso:** Se todos os campos estiverem válidos, um alerta informará que o cadastro foi realizado com sucesso.
