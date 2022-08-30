## upfi - Ignite
Esta aplicação é um desafio de um módulo do ignite para realizar upload de imagens. Nela foi trabalhada algumas bibliotecas e técnicas que serão listadas na próxima seção. 
A funcionalidade desta aplicação é trabalhar validações de formulário, upload de imagens e utilizar técnicas de data fetching com react-query.
Ela possui três telas principais: (i) uma página em forma de grid para listar uma quantidade de 6 imagens, onde é possível carregar mais quando existirem mais imagens disponíveis; (ii) um modal para realizar o upload da imagens e inserir as informações da imagem; (iii) um modal para visualizar a imagem com tamanho maior e com o link da imagem no servidor do ImgBB.

### Conceitos e técnicas utilizadas

- [ReactJS](https://pt-br.reactjs.org)
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [React-icons](https://react-icons.github.io/react-icons/)
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org)
- [Yarn](https://classic.yarnpkg.com/en/)
- [Jest](https://jestjs.io/)
- [chakra-ui](https://chakra-ui.com)
- [react-hook-form](https://react-hook-form.com)
- [axios](https://axios-http.com)
- [React Query](https://tanstack.com/query/v4/docs/overview)
- [FaunaDB](https://docs.fauna.com/fauna/current/)
- [ImgBB](https://imgbb.com/)


### Rodar aplicação

### Instalação das dependências listadas no arquivo package.json

```console
$ yarn
```

#### Execução da aplicação front-end local.

Inicia um servidor local front-end no endereço [http://localhost:8080](http://localhost:8080) no browser.
```console
$ yarn dev
```


#### Execução dos testes

Executar os testes com Jest.
```console
$ yarn test

#### Build e gerar os arquivos estáticos (SSG).

Gera uma build e os arquivos estáticos que foram configurados usando o SSG.

```console
$ yarn build
```

#### Execução da aplicação a partir build gerada.

Inicia um servidor local front-end no endereço [http://localhost:8080](http://localhost:8080) no browser.
```console
$ yarn start
```
