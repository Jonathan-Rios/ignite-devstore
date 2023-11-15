<h1 align="center">Ignite - DevStore</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-18-blue" 
    alt="React Ver. 18"
  />
   <img 
    src="https://img.shields.io/badge/NextJS-14.0.2-black" 
    alt="NextJS Ver. 14.0.2"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-5-blue"
    alt="Typescript Ver. 5" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2023-green" 
    alt="Ignite-2023"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<div align="center">

  ![Last commit](https://img.shields.io/github/last-commit/Jonathan-Rios/ignite-devstore?color=4DA1CD 'Last commit') &nbsp;
  ![Repo size](https://img.shields.io/github/repo-size/Jonathan-Rios/ignite-devstore?color=4DA1CD 'Repo size') &nbsp;
  ![Languages](https://img.shields.io/github/languages/count/Jonathan-Rios/ignite-devstore?color=4DA1CD 'Languages') &nbsp;
  
</div>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

![cover](.github/project-preview.png?style=flat)

<br>

## 💻 Projeto
Aplicação para utilizar os conceitos mais atualizados até o momento atual (Nov.2023) na versão no Next, utilizando Tailwind para estilização e Cypress nos testes EndToEnd.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Cypress](https://www.cypress.io/)


## 🔗 Link do projeto
Se quiser ver o projeto no ar, clique [aqui](https://ignite-devstore-jrs.vercel.app).

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-devstore.git

$ cd ignite-devstore
```

- A Aplicação consta com uma api dedicada nesse endereço: https://ignite-devstore-api-jrs.vercel.app/ 
  ou podendo usar a local de teste como http://localhost:3000.


Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
- O app estará disponível no seu browser pelo endereço http://localhost:3000.
 

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />


## 📓 Anotações pessoais

<h3>Exemplo de descrição </h3>

```bash
  ➜ npx create-next-app@latest       

  ✔ What is your project named? … ignite-devstore
  ✔ Would you like to use TypeScript? … Yes
  ✔ Would you like to use ESLint? … Yes
  ✔ Would you like to use Tailwind CSS? … Yes
  ✔ Would you like to use `src/` directory? … Yes
  ✔ Would you like to use App Router? (recommended) … Yes
  ✔ Would you like to customize the default import alias (@/*)? … Yes
  ✔ What import alias would you like configured? … @/*

  ➜ npm i -D eslint @rocketseat/eslint-config
    # Adicione "@rocketseat/eslint-config/next" no .eslintrc.cjs dentro de extends.
    # Mais detalhes de como configurar: https://github.com/Rocketseat/eslint-config-rocketseat

  ➜ npm i lucide-react

  ➜ npm install prettier prettier-plugin-tailwindcss -D
    # Crie e configure do zero o arquivo prettier.config.js
  
  ➜ npm i zod
  ➜ npm i tailwind-merge
  ➜ npm i lucide-react

  ➜ npm i cypress -D
    npx cypress open 


  # Adicionando essa configuração em next.config.js para não quebrar o build erros de ESLINT e TypeScript
  # esses erros devem ser sempre arrumados antes dessa etapa.
  
    const nextConfig = {
      eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
    ...resto das configs 
    }
```


<br />

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" style="border-radius:50%" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠
 

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)