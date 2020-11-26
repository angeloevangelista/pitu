<p align="center">
  <a href="https://github.com/angeloevangelista/pitu">
    <img src="./.github/images/logo.png" alt="Pitu - Encurtador de URL" width="80">
  </a>

  <h3 align="center">Pitu</h3>

  <p align="center">
    Seu novo encurtador de URL.
  </p>
</p>

# Indice

- [Por quê Pitu?](#por-quê-pitu?)
- [Teste o Pitu](#teste-o-pitu)
- [Como executar](#como-executar)
  - [Backend / Server](#backend-/-server)
  - [Frontend / Web](#frontend-/-web)

# Por quê Pitu?

O pitu, ou Lagosta-de-água-doce, é um camarão que nasce, pasme, em águas doces e, em sua vida adulta pode chegar a atingir até 50cm de comprimento, incrivel não?

O Pitu nasceu para fazer o processo inverso: Você começa com uma url grande e, no fim, você terá uma URL bem menor... Enfim, seu camarãozinho de link ;)

# Teste o Pitu

Aqui vai ter a tela e o projeto publicado

# Como executar

Primeiramente, clone este repositório na sua máquina utilizando a CLI do [Git](https://git-scm.com/):

```bash
$ git clone https://github.com/angeloevangelista/pitu.git
```

Agora, com o projeto em mãos(_jokes!_), siga os passos abaixo para executar os projetos do backend e frontend, respectivamente.

## Backend / Server

Requisitos para executar o backend:

- Servidor de banco de dados [MySql](https://www.mysql.com/) local, ou na nuvem.
- Ter o [Node Js](https://nodejs.org/en/) instalado na sua máquina.

Você poderá usar outro banco como PostgresSql, MsSql, MariaDb... Apenas tenha em mente que você precisará alterar a conexão do [Sequelize](https://sequelize.org/), [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) utilizado, por sí só.

**Banco**

No seu servidor de banco de dados, crie uma base chamada `pitu`.

**Dependências**

Com o projeto aberto no seu terminal, entre na pasta `server` e, lá, execute o comando `npm install`, para baixar as dependências, você pode usar o `yarn`, se preferir.

**Configurações**

Configure as variáveis de ambiente em um arquivo na raiz chamado `.env`.

Use o `.env.example` para saber as chaves.

**Execução**

Em ambiente de desenvolvimento uso o script `dev`, ele irá reiniciar o servidor a cada alteração.

```bash
npm run dev

# ou

yarn dev
```

## Frontend / Web

Requisitos para executar o frontend:

- Ter o [Node Js](https://nodejs.org/en/) instalado na sua máquina.

**Dependências**

Com a raiz do projeto aberta no seu terminal, entre na pasta `web` e, lá, execute o comando `npm install`, para baixar as dependências, ou `yarn`, se preferir.

**Configurações**

As variáveis de ambiente podem ser configuradas para 2 ambientes possíveis:

| Arquivo          | Ambiente          |
| ---------------- | ----------------- |
| .env.example     | Apenas um exemplo |
| .env.development | Desenvolvimento   |
| .env.production  | Produção          |

Use o `.env.example` para saber as chaves.

**Execução**

Inicie o projeto com o script `start`:

```bash
npm run start

# ou

yarn start
```
