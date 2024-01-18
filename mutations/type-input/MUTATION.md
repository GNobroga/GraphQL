# Mutation

Mutation servem para alterar, adicionar, excluir.

```graphql
   
   type Mutation {

   }

```

Assim como na Query temos resolvers pra resolver, temos também na mutation. 

Além disso, assim como na Query a mutation recebe como primeiro argumento o objeto e no segundo os parâmetros.

```graphql
   mutation {
      newUser(name: "Goku", email: "dsdsds") {
         email
      }
   }
```