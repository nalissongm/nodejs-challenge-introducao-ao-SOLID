## Rotas da aplicação

### POST `/users`

- [x] A rota deve receber `name`, e `email` dentro do corpo da requisição.
- [x] Deve ser possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

- [x] A rota deve receber, nos parâmetros da rota, o `id` de um usuário.
- [x] Deve alterar o admin do usuário para `true`.

### GET `/users/:user_id`

- [x] A rota deve receber, nos parâmetros da rota, o `id` de um usuário.
- [x] Deve devolver as informações do usuário encontrado.

### GET `/users`

- [x] A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário
- [x] Deve retornar uma lista com todos os usuários cadastrados.
- [x] `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin.
- [x] Apenas o usuário admin deve poder ter acesso aos users.

## Específicação dos testes

Para esse desafio, temos os seguintes testes:

### Teste do model

- [x] **Should be able to create an user with all props**
    
  > Para que esse teste passe, você deve completar o código do model de usuários que está em **src/modules/users/model/User.ts**.
  > O usuário deve ter as seguintes propriedades:    
  >  ```json
  >  {
  >    id: string;
  >
  >    name: string;
  >
  >    admin: boolean;
  >
  >    email: string;
  >
  >    created_at: Date;
  >
  >    updated_at: Date;
  >  }
  >  ```
  >_

- [x] A propriedade `admin` deve sempre ser iniciada como `false`.
- [x] `id` deve ser um `uuid` gerado automaticamente.

### Testes do repositório

- [x] **Should be able to create new users**
    
  > Para que esse teste passe, é necessário que o método `create` do arquivo **src/modules/users/repositories/implementations/UsersRepository** permita receber o `name` e `email` de um usuário, crie um usuário a partir do model (que foi completado no teste anterior).
    
- [x] **Should be able to list all users**
    
  > Para que esse teste passe, é necessário que o método `list` do arquivo **src/modules/users/repositories/implementations/UsersRepository** retorne a lista de todos os usuários cadastrados na aplicação.
    
- [x] **Should be able to find user by ID**
    
  > Para que esse teste passe, é necessário que o método `findById` do arquivo **src/modules/users/repositories/implementations/UsersRepository** receba o `id` ****de um usuário e ****retorne o usuário que possui o mesmo `id`.
    
- [x] **Should be able to find user by e-mail address**
    
  > Para que esse teste passe, é necessário que o método `findByEmail` do arquivo **src/modules/users/repositories/implementations/UsersRepository** receba o `email` ****de um usuário e ****retorne o usuário que possui o mesmo `email`.
     
- [x] **Should be able to turn an user as admin**
    
  > Para que esse teste passe, é necessário que o método `turnAdmin` do arquivo **src/modules/users/repositories/implementations/UsersRepository** receba o objeto do usuário completo, mude a propriedade `admin` para `true`, atualize também a propriedade `updated_at`  e retorne o usuário atualizado.
    

### Testes de useCases

- [x] **Should be able to create new users**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/createUser/CreateUserUseCase.ts** receba `name` e `email` do usuário a ser criado, crie o usuário através do método `create` do repositório e retorne o usuário criado.
    
- [x] **Should not be able to create new users when email is already taken**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/createUser/CreateUserUseCase.ts** não permita que um usuário seja criado caso já exista um usuário com o mesmo email e, nesse caso, lance um erro no seguinte formato:  
  >  ```tsx
  >  throw new Error("Mensagem do erro");
  >  ```
  >_
    
- [x] **Should be able to turn an user as admin**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/turnUserAdmin/TurnUserAdminUseCase.ts** receba o `id` de um usuário, chame o método do repositório que transforma esse usuário em administrador e retorne o usuário após a alteração.
    
- [x] **Should not be able to turn a non existing user as admin**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/turnUserAdmin/TurnUserAdminUseCase.ts** não permita que um usuário que não existe seja transformado em admin. Caso o usuário não exista, lance um erro no seguinte formato: 
  >  ```tsx
  >  throw new Error("Mensagem do erro");
  >  ```
  >_
    
- [x] **Should be able to get user profile by ID**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/showUserProfile/ShowUserProfileUseCase.ts** receba o `id` de um usuário, chame o método do repositório que busca um usuário pelo `id` e retorne o usuário encontrado.
    
- [x] **Should not be able to show profile of a non existing user**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/showUserProfile/ShowUserProfileUseCase.ts** não permita que um usuário que não existe seja retornado. Caso o usuário não exista, lance um erro no seguinte formato:  
  >  ```tsx
  >  throw new Error("Mensagem do erro");
  >  ```
  >_
    
- [x] **Should be able to list all users**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/listAllUsers/ListAllUsersUseCase.ts** chame o método do repositório que retorna todos os usuários cadastrados e retorne essa informação.
    
- [x] **Should not be able to a non admin user get list of all users**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/listAllUsers/ListAllUsersUseCase.ts** receba o `id` de um usuário e retorne a listagem de usuários cadastrados na aplicação apenas se o `id` recebido pertencer a um usuário admin.
  > Caso o usuário não seja admin, lance um erro no seguinte formato: 
  >  ```tsx
  >  throw new Error("Mensagem do erro");
  >  ```
  >_
    
- [x] **Should not be able to a non existing user get list of all users**
    
  > Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/listAllUsers/ListAllUsersUseCase.ts** não permita que um usuário que não exista, acesse a listagem de usuários cadastrados na aplicação. Caso o usuário não exista, lance um erro no seguinte formato:  
  >  ```tsx
  >  throw new Error("Mensagem do erro");
  >  ```
  >_
    