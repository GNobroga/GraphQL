# Input

Input permite agrupar propriedades para se usar dentro de mutations e simplificar a quantidade de parâmetros.

```graphql

   type User {
      name: String!
      email: String!
   }

   type Mutation {
      addUser(input: UserInput): User
   }

   input UserInput {
      name: String
      email: String
   }

```

Utilizando no Apolo Server

```graphql
   mutation {
      addUser(
         input: {
            name: "dsdsd",
            email: "ddsd"
         }
      )
   }
```