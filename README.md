# Amigo Secreto - Aplicação Web

## Descrição

Esta aplicação permite realizar um sorteio de um "Amigo Secreto", onde você pode adicionar nomes, sortear um amigo e acompanhar a lista de amigos que já foram sorteados.

## Tecnologias Usadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Funcionalidades

- **Adicionar Amigos**: Insere os nomes dos amigos para incluir na lista de sorteio.
- **Sortear Amigo**: Sorteia um amigo aleatoriamente da lista e exibe o nome do amigo secreto.
- **Atualizar Lista de Amigos**: Após cada sorteio, o amigo sorteado é removido da lista e a lista é atualizada. Quando todos os amigos forem sorteados, é exibida uma mensagem indicando que todos os amigos já foram sorteados.
- **Botão de Sorteio Desabilitado**: Quando todos os amigos forem sorteados, o botão de sorteio é desabilitado.

## Como Começar

### Passo a Passo para Clonar e Usar o Projeto

1. **Clonar o Repositório**:
   - Clique no botão "Code" no repositório do GitHub e copie o link do repositório.
   - Abra o terminal no seu computador e navegue até o diretório onde deseja salvar o projeto.
   - Execute o seguinte comando para clonar o repositório:
     ```bash
     git clone <URL_DO_REPOSITORIO>
     ```
   - Entre no diretório do projeto:
     ```bash
     cd <NOME_DO_DIRETORIO>
     ```

2. **Abrir o Projeto**:
   - Abra o projeto em um editor de código de sua escolha, como VS Code ou Sublime Text.

3. **Executar o Projeto**:
   - O projeto não depende de servidores ou ferramentas externas. Para visualizar a aplicação, basta abrir o arquivo `index.html` em seu navegador.

4. **Personalizar ou Expandir**:
   - Sinta-se à vontade para modificar o código, adicionar novas funcionalidades ou personalizar a aparência da aplicação.

### Como utilzar

1. **Adicionar Amigos**:
   - Digite o nome de um amigo no campo de entrada e clique em "Adicionar".
   - Se o campo de entrada estiver vazio, um alerta será exibido solicitando que um nome seja inserido.

2. **Sortear Amigo**:
   - Clique no botão "Sortear" para realizar o sorteio.
   - O amigo sorteado será removido da lista e o nome será exibido na tela.
   - O botão de sorteio será desabilitado quando todos os amigos tiverem sido sorteados.

3. **Exibir Lista de Amigos**:
   - A lista de amigos inseridos é exibida abaixo do campo de entrada, e será atualizada a cada sorteio.

## Estrutura do Código

### Array `listaAmigos`
- Utilizado para armazenar os nomes dos amigos inseridos.

### Funções

- **`adicionarAmigo()`**: Adiciona um novo amigo à lista e atualiza a exibição da lista.
- **`sortearAmigo()`**: Sorteia aleatoriamente um amigo da lista, exibe o nome sorteado e remove o nome da lista.
- **`atualizarListaAmigos()`**: Atualiza a exibição da lista de amigos na tela, exibindo os nomes restantes ou uma mensagem caso todos os amigos tenham sido sorteados.
- **`Botão de Sorteio Desabilitado`**: Quando todos os amigos forem sorteados, o botão de sorteio é desabilitado.

## Link

[Amigo Secreto](<https://amigo-secreto-omega-amber.vercel.app/>)





