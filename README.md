# Angular Helloworld S3

Este projeto foi gerado a partir do [Angular CLI](https://github.com/angular/angular-cli) e se encontra na versão 9.1.

# Aceleradores no desenvolvimento Angular

Estão disponíveis algumas soluções para otimizar o desenvolvimento de front-end moderno aqui no banco, como por exemplo o Voxel Design System e o QuickWeb.

## QuickWeb CLI

O QuickWeb CLI tem o papel de gerar um scaffold especifico para o seu caso de uso, incluindo os pacotes do Voxel e QuickWeb, além de contar com o Jest como framework de testes unitários.

Caso queira utilizar o projeto gerado pela CLI, basta seguir os passos descritos na [documentação](https://voxel.dev.cloud.itau.com.br/quickweb/cli), e iniciar um projeto configurado com todas as ferramentas para acelerar o seu desenvolvimento. Basta você substituir os arquivos contidos nesta pasta `app` pelos arquivos gerados pela CLI. 

## Outras soluções QuickWeb

O QuickWeb é um conjunto de ferramentas construídas para agilizar, padronizar e facilitar o desenvolvimento de aplicações front-end web modernas. O produto entrega componentes reutilizáveis, abstraindo complexidades para se integrar ao ecossistema do banco.

Para mais informações sobre todos os produtos, acesse a [documentação](https://sd4.pages-gitlab.prod.cloud.ihf/quick-web/docs/)

## Voxel

O Voxel tem como objetivo estabelecer padrões de interface, regras de uso e disponibilizar componentes reutilizáveis para a camada de Front-End das aplicações web do banco.

Para mais informações sobre todos os produtos, acesse a [documentação](https://voxel.dev.cloud.itau.com.br/)

## Como instalar os produtos?

Caso os scaffolds disponiveis no QuickWeb ClI não atendam os seus requisitos, você também pode optar por instalar os pacotes individualmente no seu projeto, de acordo com a sua necessidade, rodando o comando: 

`npm i nome-do-pacote --save`

Para realizar a instalação de dependências internas via esteira, como o Voxel e QuickWeb, será necessário configurar criar um arquivo .npmrc na raiz da sua pasta `app` apontando para o registry do Artifactory, conforme exemplo abaixo:

```ts
    registry=https://artifactory.prod.aws.cloud.ihf/artifactory/api/npm/npm-devel/
    strict-ssl=false
```

## Comandos Principais para Desenvolvimento

Esse repositório já vem previamente configurado com diversos comandos:

| Comando   |      Uso     |  
|----------|:-------------|
|  `npm run build` | Gerar pasta dist com os arquivos necessários para publicação |
|  `npm start`   | Executar a aplicação juntamente com o mock server | 
|  `npm test` | Executar os testes de unidade |
|  `npm run lint` | Verificar a padronização de código |

## Precisa de Ajuda para utilizar os produtos?

Caso tenha dificuldades ou erros relacionados ao artifactory, proxy, autenticação e etc, possuímos um [FAQ](https://voxel.cloud.ihf/onboarding-frontend/#/pre-requisitos/faq) junto ao [setup de ambiente](https://voxel.cloud.ihf/onboarding-frontend/#/pre-requisitos/setup)

Para mais dúvidas, sugestões ou reclamações envie-nos um [email para o QuickWeb](mailto:RT_FrontStacks_FrameworkWeb@correio.itau.com.br) ou [email para o Voxel](mailto:RT_FrontStacks_FrameworkInterface@correio.itau.com.br)

😊

