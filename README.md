# Challenge Test Automation in Cypress

🇬🇧 🇺🇸
This repository has automated tests *e2e* and *API*, using the **cypress** framework. The codes shared here are a process of study, suggestions and collaborations are welcome 😄.

🇧🇷 🇵🇹 🇦🇴
Este repositório contém a criação de testes automatizados dos tipos *e2e* e *API*, utilizando o framework **cypress**. Os códigos aqui compartilhados são um processo de estudo sobre cypress, sugestões e colaborações serão bem-vindas 👍.

---
## Documentação


### Instalação do ambiente de teste

Tecnologias utilizadas:

- node v14.17.0
- npm 6.14.13
- cypress 7.5.0

- Comandos para conferir versões:
```
node -v && npm -v
npx cypress version
```
- Instale o Node, npm e cypress. [Guia de instalação do cypress.](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements);
  - Para sistema GNU/LINUX: 
  ```
   apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
  ```
- Baixe este repositório ou faça um git clone;
- No diretório escolhido:
```
npm init
npm install cypress
``` 
- Para conferir instalação correta do Cypress utilizar: `node_modules/.bin/cypress open`

#### Detalhes para execução dos Testes
- O sistemas https://seubarriga.wcaquino.me/ foi utilizado como urlbase, para executação desse suite de testes em modo gráfico utilziar o comando `cypress:open`, em modo texto, com isso para executar a suite de testes de api é sobreescrita baseUrl.

Para abrir a interface de execução do Cypress, execute no diretório do projeto:

- Para executação  da suite de testes da API ServeRest utilizar os comandos:
  - Utilização da API é [local](https://github.com/ServeRest/ServeRest#readme), consultar documentação do [projeto](https://github.com/serverest/serverest) 
  - Antes de executar esses testes lembrar de provisionar o ServeRest com o comando `docker run -p 3000:3000 paulogoncalvesbh/serverest:latest -t 60`. ServerRest ficará diponível localmente em "http://localhost:3000/"
  - modo gráfico: ` node run cypress:open`
  - modo terminal: ` npx cypress run -spec "tests/api/*" --config pageLoadTimeout=30000,baseUrl=http://localhost:3000`

- Para executaçao da sauite de testes e2e utilizar os comandos:
  - modo gráfico: ` node run cypress:open:api`
  - modo terminal: ` npx cypress run -spec "tests/e2e/*"`

## Planejamento dos testes

- Planejamento dos testes para o sistema contido em https://seubarriga.wcaquino.me/ podem ser encontradas na [wiki](https://github.com/1freitas/w-automation-challenge/wiki#detalhes-sobre-os-testes-e2e).
- Planejamento dos testes para a API Pública https://serverest.dev/ podem ser encontradas na [wiki](https://github.com/1freitas/w-automation-challenge/wiki#detalhes-sobre-os-testes-de-api).

## Estrutura de diretórios do projeto

<pre><font color="#5555FF"><b>.</b></font>
├── <font color="#5555FF"><b>cypress</b></font>
├── cypress.json
├── LICENSE
├── <font color="#5555FF"><b>node_modules</b></font>
├── package.json
├── package-lock.json
├── README.md
├── <font color="#5555FF"><b>scripts</b></font>
└── <font color="#5555FF"><b>tests</b></font>
  <pre>
  ├── <font color="#5555FF"><b>api</b></font>
  ├── <font color="#5555FF"><b>downloads</b></font>
  |── <font color="#5555FF"><b>e2e</b></font>
  ├── <font color="#5555FF"><b>fixtures</b></font>
  ├── <font color="#5555FF"><b>plugins</b></font>
  ├── <font color="#5555FF"><b>screenshots</b></font>
  |── <font color="#5555FF"><b>support</b></font>
  └── <font color="#5555FF"><b>videos</b></font>
   </pre>
</pre>

- Tests: Os testcases estão armazenados no diretório `tests/api` e `tests/e2d`, respectivamente testes verificando a camada de API (ServeRest) e teste end-to-end (seubarriga.wcaquino.me). Ambos os sistemas são dedicados ao aprendizado de programação e foram utilizados para criação de testes automatizados utilizando a ferramenta cypress.
- cypress.json: [configuraçãoes padrão/default](https://docs.cypress.io/guides/references/configuration) do cypress foram alteradas, visto que este projeto é educativo e não existe a integração no mesmo repostório das aplicações que foram testadas. Sendo assim, foram adicionadas configurações e preferências de uso no arquivo cypress.json com esta finalidade.
- Foram criados dos geradores de fixtures, gerando arquivos .json com dados randomizados utilizando a API [FAKE](https://fakercloud.com/api).
- Foi criado um projeto para gerenciar as tarefas realizadas nesse desafio, chamado [WChallenge](https://github.com/1freitas/w-automation-challenge/projects/1)
- Foram utilizadas fixtures na suite de testes e2e, para utilização na suite de api ainda requer ajustes, mapeado na tarefa.
- Existem alguns "bugs" a serem corrigidos para melhor a eficiência dos scripts de geração de fixture, e também limpesa do base de dados via frontend para independencia completa dos casos de testes. Tarefas para isso estão mapeadas no projeto Wchallenge que será continuado posteriormente, após essa entrega.
- Para a codificação dos testes e gerenciamento do repositório git foi adotado [Github workflow](https://guides.github.com/introduction/flow/) para esse projeto de testes  após leituras de referências  [Luca Mezzzalira](https://lucamezzalira.com/2014/03/10/git-flow-vs-github-flow/) e [Scott Chacon](http://scottchacon.com/2011/08/31/github-flow.html)

## Proxímos Passos

- Refatorar os teses atuais buscando aprimorar e estar aderente as boas práticas descritas (aqui)[https://docs.cypress.io/guides/references/best-practices].
  Alguns dos itens que foram alvos durante o desenvolvimento desse desavio:
  -  Assigning Return Values
  -  Using after or afterEach hooks
  -  Setting a global baseUrl
  -  Unnecessary Waiting
  -  Creating "tiny" tests with a single assertion
- Adicionar um pipeline com o Github Actions

## Resultados

Suite de testes de API
```
Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  api/serveRestCarts.spec.js               375ms        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  api/serveRestProducts.spec.js            343ms        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  api/serveRestToken.spec.js               162ms        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  api/serveRestUsers.spec.js               233ms        5        5        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:01       11       11        -        -        -
```

 Suite de testes E2E
```
        Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  e2e/seuBarrigaAccount.spec.js            00:42       10       10        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  e2e/seuBarrigaBalance.spec.js            00:11        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  e2e/seuBarrigaLoginLogout.spec.js        00:18        6        6        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  e2e/seuBarrigaRegister.spec.js           00:13        3        2        1        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  e2e/seuBarrogaManageAccount.spec.js      00:33        6        4        2        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  e2e/seuBarrogaManagementAccounts.sp      00:15        3        3        -        -        - │
  │    ec.js                                                                                       │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  e2e/seuBarrogaResume.spec.js             00:15        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  e2e/seuBarrogaResumeExcluseAll.spec      00:11        1        -        1        -        - │
  │    .js                                                                                         │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  3 of 8 failed (38%)                      02:42       34       30        4        -        -

```
obs: Os cenários com falha são resultado dos bugs comentados acima, especialmente o cenário seuBarrogaResumeExcluseAll.spec é uma ferramenta para limpesa da base antes de uma próxima rodada de testes, deve ser criado um command especfico para essa função.

## Dashboard Cypress
- Link do convite https://dashboard.cypress.io/invitation/60423f1d-4dbb-43be-92c4-05c46dd88172

## Fontes de Pesquisa para realizar o desafio
- Filho da nuvem contribuindo com projeto opensource, Contribuindo para um projeto no GitHub (github actions + cypress)[link](https://www.youtube.com/watch?v=DHPlnp0k76U&t=320s)
- AGILIZEI, Pair Testing #01 - [Integração contínua com GH Actions, Gitlab CI e Azure com Ernesto Barbosa](https://www.youtube.com/watch?v=tYIKfQ3lgk0)
- Documentação Official so [Cypress](https://docs.cypress.io)
- Documentação Swagger da API [ServeRest](https://serverest.dev)
