# Boas vindas ao repositório do projeto Trybesmith!

# Entregáveis

  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Para este projeto, você vai criar uma loja de itens medievais, no formato de uma _API_, utilizando _Typescript_.
  
  Você irá desenvolver todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) em seu código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados:
  Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜 - _Create, Read, Update_ e _Delete_).

  Você irá criar alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o **MySQL**.

  ---

  O código para cadastro de pessoas usuárias deve ser criado por você utilizando os conhecimentos adquiridos nesse bloco.

  ⚠️ **Dicas Importantes** ⚠️:

  - Não haverá front-end neste projeto, portanto não se preocupe com a visualização, apenas com as funcionalidades e organização do código;

  - Sua API deve ser desenvolvida dentro da pasta `./src`.
</details>


  1. Clone o repositório

  - `git clone https://github.com/tryber/sd-017-project-trybesmith.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-017-project-trybesmith`

  2. Instale as dependências [**Caso existam**]

  - `npm install`

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

