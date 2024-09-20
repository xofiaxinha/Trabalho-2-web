# App Minhas Despesas
Este é um aplicativo simples de registro de despesas que utiliza front e back-end, que permite cadastrar, buscar, atualizar e visualizar despesas de forma fácil, utilizando uma API Rest com PostgreSQL

## Sumário
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rotas](#rotas)
- [Componentes](#componentes)

## Tecnologias Utilizadas
### Back-end:
- Node.js
- Express - Para a criação das rotas e da API REST.
- Sequelize - ORM para interação com o banco de dados.
- PostgreSQL - Banco de dados relacional para armazenar as despesas.
- cors - Middleware para lidar com problemas de CORS.
- dotenv - Para o gerenciamento de variáveis ambiente

### Front-end:
- React - Biblioteca para criação da interface de usuário.
- Axios - Biblioteca para fazer requisições HTTP.

## Instalação
### Requisitos:
- Node.js
- PostgreSQL
- npm ou yarn

### Passos para instalar o projeto:

- Clone o repositório:

```bash
git clone https://github.com/seu-usuario/Trabalho-1-web.git
cd Trabalho-1-web
```

### Instale as dependências do back-end:

```bash
cd api
npm install express dotenv sequelize pg pg-hstore cors
```

### Instale as dependências do front-end:

```bash
cd ../client
npm install axios
```
## Configuração

1. Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente para configuração do banco de dados PostgreSQL:

    ```plaintext
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=nome_do_banco
    DB_HOST=localhost
    DB_PORT=5432
    ```

2. Configure o banco de dados PostgreSQL criando um banco de dados e executando as migrações do Sequelize:

    ```bash
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    ```

### Iniciar a aplicação:

No diretório backend, inicie o servidor Node.js:

```bash
node ./index.js
```

No diretório frontend, inicie o servidor de desenvolvimento React:

```bash
npm run dev
```

Agora, o servidor backend estará rodando em http://localhost:3000 e o front-end em http://localhost:5173 (ou outra porta configurada).

## Rotas
### Back-end (API REST):
### 1. Listar todas as despesas

GET ```/expenses```

    Retorna uma lista de todas as despesas.

### 2. Obter um Pokémon por Número

GET ```/expenses/:name```

    Retorna as despesas que possuem o nome dado

### 3. Adicionar um novo Pokémon

POST ```/expenses```

    Adiciona uma nova despesa.

### 4. Atualizar um Pokémon existente

PUT ```/expenses/:id```

    Atualiza os dados de uma despesa dado seu id

### 5. Deletar um Pokémon

DELETE ```/pokemon/:num```

    Remove uma despesa com base no número fornecido.

## Componentes
1. Table e etc.:
   Vários pequenos componentes que montam a tabela utilizando divs

2. ExpenseList:

    Componente que exibe a lista de despesas.
    Faz requisições à API para buscar e exibir todas as despesas.
    Formata valores no padrão monetário brasileiro (R$ 0,00).

3. FormCadastroDespesa:

    Formulário para adicionar uma nova despesa.
    Envia a despesa para o back-end através da rota POST /expenses.

4. SearchInput:

    Componente para buscar uma despesa específica pelo nome.
    Faz requisições à API para buscar despesas via a rota GET /expenses/:name.

5. FormEditarDespesa:

    Componente para editar uma despesa existente.
    Pré-preenche os valores do formulário com os dados da despesa atual.

