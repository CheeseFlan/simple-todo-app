# Todo-API

> API criada durante o mini-curso do IFAL

API sobre tarefas a fazer.

## Getting Started

- `git clone`
- `cd todo-api`
- `npm install`
- `npm run dev` para desenvolvimento ou `npm start` para produção.

### Prerequisites

** É necessário ter a versão do NodeJs >= 7.5 **

### Folders and Files

```
+-- _src
|   +-- _controllers
|       +--- todo.js
|   +-- _models
|       +--- todo.js
|   +-- _routes
|       +--- todo.js
+-- _utils
|   +--- asyncErrorHandler.js
|   +--- cors.js
|
+--- .editorconfig
+--- .gitignore
+--- app.js
+--- LICENSE.md
+--- package-lock.json
+--- package.json
+--- README.md
```

## Deployment

Recomendo subir para o [heroku](https://www.heroku.com), pois facilita o trabalho e o gerenciamento.

## Built With

* [Express](http://expressjs.com/pt-br/) - Usado para facilitar o gerenciamento de rotas
* [Mongoose](https://maven.apache.org/) - Usado para facilitar o gerenciamento do mongoDB
* [Mlab](https://mlab.com) - Usado para facilitar o deploy e agilizar o desenvolvimento

## Authors

* **João Henrique Gomes** - [Facebook](https://www.facebook.com/joao.nomads)
* **João Bruno Alencar** - [Facebook](https://www.facebook.com/bruno.alencar.587)
* **Bruno Bessa** - [Facebook](https://www.facebook.com/professorbessa)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
