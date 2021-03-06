<img alt="Chat Node" title="Chat Node" src=".github/banner-nlw5.png" />

<h1 align="center">Chat Node</h1>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagram">Diagram</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-próximos-passos">Próximos passos</a>
</p>

<br>

## ✨ Technologies

This project was developed using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Websocket](https://www.npmjs.com/package/websocket)
- [Insomnia](https://insomnia.rest/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)
- [SQlite](https://www.sqlite.org/index.html)

## 💻 Project

Chat Node is an application that consists of improving the user experience through good communication with the customer via chat.

This project was developed during the NodeJS trail, in the fifth edition of NLW. We learned concepts about what an API is, how to start a project using Typescript and Express for route management, data manipulation, automated tests, among others.

## 🔶 Diagram

<img src=".github/diagrama.png" alt="Diagram of Application" />

## 🚀 Getting started

Clone the project and access the folder

```bash
$ git clone https://github.com/eltonsantos/chat-node.git && cd chat-node
```

Follow the steps below
```bash
# Install the dependencies
$ yarn

# Generate migrations
$ yarn typeorm migration:run

# Start the project
$ yarn dev
```

- To access client's chat: http://localhost:3333/pages/client
- To access admin's chat: http://localhost:3333/pages/admin

## 🐾 Próximos passos

- [ ] Possibilitar desconectar o chat, tanto do lado do cliente, quanto do lado do admin 😎
- [ ] Colocar na tela alguma notificação de digitação na interface (Ex: Admin/Cliente está digitando...) 🥰
- [ ] Possibilitar o envio da conversa para o email do cliente 🤩
- [ ] Colocar login para que o admin possa acessar 🐱‍💻
- [ ] Ver histórico dos atendimentos 🤗
- [ ] E muito mais... ❤💪🏼

---

## 👨🏻‍💻 Author

<h3 align="center">
  <img style="border-radius: 50%" src="https://avatars3.githubusercontent.com/u/1292594?s=460&u=0b1bfb0fc81256c59dc33f31ce344231bd5a5286&v=4" width="100px;" alt=""/>
  <br/>
  <strong>Elton Santos</strong> 🚀
  <br/>
  <br/>

 <a href="https://www.linkedin.com/in/eltonmelosantos" alt="LinkedIn" target="blank">
    <img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white" />
  </a>

  <a href="mailto:elton.melo.santos@gmail.com?subject=Olá%20Elton" alt="Email" target="blank">
    <img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:elton.melo.santos@gmail.com" />
  </a>

<br/>

Made with ❤️ by Elton Santos 👋🏽 [Entre em contato!](https://www.linkedin.com/in/eltonmelosantos/)

</h3>
