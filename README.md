# Jogo de adivinhação

Esse programa implementa um jogo simples de adivinhação de números.

## 1. **Seleção de Elementos HTML:**

- `frm`, `inNumber`, `outAttempts`, e `resultElement` são selecionados usando `document.querySelector()`.
- `frm` representa o formulário HTML.
- `inNumber` representa o input onde o usuário insere o número.
- `outAttempts` representa a área onde as informações sobre as tentativas restantes são exibidas.
- `resultElement` representa o elemento `<h2>` onde a resposta da adivinhação é exibida.

## 2. **Constantes e Variáveis:**

- `MAX_ATTEMPTS` é definido como 10, representando o número máximo de tentativas permitidas.
- `attempts` é inicializado como 0 e é usado para rastrear o número de tentativas feitas pelo usuário.
- `secretNumber` é inicializado chamando a função `generateSecretNumber()`, que gera um número aleatório entre 1 e 100. Este é o número que o usuário precisa adivinhar.

## 3. **Exibição de Mensagem Inicial:**

- O texto de `outAttempts` é definido para informar ao jogador sobre o jogo e quantas tentativas ele tem.

## 4. **Evento de Envio do Formulário:**

- Um ouvinte de eventos é adicionado ao formulário para lidar com o envio do mesmo.
- Quando o formulário é enviado (`submit`), a função de retorno de chamada é acionada.
- `e.preventDefault()` é usado para evitar o comportamento padrão do formulário de recarregar a página.

## 5. **Lógica da Adivinhação:**

- Primeiro, verifica-se se o usuário já acertou o número, verificando se o texto em `resultElement` contém a palavra "Parabéns".
- Se o usuário já acertou, uma mensagem de vitória é exibida, mostrando o número secreto, e o input `inNumber` é desabilitado.
- Caso contrário, o número inserido pelo usuário é convertido em um número usando `Number(inNumber.value)` e é verificado se é um número válido. Se não for, uma mensagem de erro é exibida.
- Se for um número válido, é verificado se o número inserido pelo usuário é igual ao `secretNumber`. Dependendo do resultado, uma mensagem apropriada é exibida em `resultElement`.
- O número de tentativas é incrementado.
- O número de tentativas restantes é atualizado e exibido em `outAttempts`.
- O valor do input `inNumber` é limpo para permitir que o usuário insira um novo número.

## 6. **Função `generateSecretNumber()`:**

- Esta função gera e retorna um número aleatório entre 1 e 100, que é o número secreto que o usuário precisa adivinhar.
