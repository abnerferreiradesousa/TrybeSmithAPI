# Boas vindas ao repositório do projeto Trybesmith!

# Entregáveis

  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  Para este projeto, criei uma loja de itens medievais, no formato de uma _API_, utilizando _Typescript_.
  
  Desenvolvi todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) e, por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados:
  Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜 - _Create, Read, Update_ e _Delete_).

  Criei alguns _endpoints_ que leem e escrevem em um banco de dados, utilizando o **MySQL**.


  1. Clone o repositório

  - `git clone git@github.com:abnerferreiradesousa/trybesmith.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd trybesmith`

  2. Instale as dependências

  - `npm install`

# Stacks

- MySQL
- TypeScript
- Node.js
- Express.js

## 1 - Endpoint para a listagem de produtos - GET

- O endpoint está acessível através do caminho (`/products`);

---

## 2 - Endpoint para o cadastro de produtos - POST

- O endpoint deve ser acessível através do caminho (`/products`);

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

---

## 3 - Endpoint para o cadastro de pessoas usuárias - POST

- O endpoint deve ser acessível através do caminho (`/users`);

- O endpoint deve receber a seguinte estrutura:
```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```
---

## 4 - Endpoint para listar todos os pedidos - GET

- O endpoint deve ser acessível através do caminho (`/orders`).


## 5 - Endpoint para o login de pessoas usuárias - POST

- O endpoint deve ser acessível através do caminho (`/login`).

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```

---

## 6 - Endpoint para o cadastro de um pedido - POST

- O endpoint deve ser acessível através do caminho (`/orders`);


- O endpoint deve receber a seguinte estrutura:
```json
  {
    "productsIds": [1, 2]
  }
```

