# GraphQL

## Type

### Query


**!** - Indica que o campo é non-nullable

### Resolvers

Os resolvers em GraphQL são responsáveis por resolver consultas específicas, buscando os dados necessários para satisfazer a solicitação do cliente GraphQL. Cada campo em uma consulta tem um resolver associado, e é esse resolver que determina como o valor do campo é obtido.

```graphql

  type Query {
    users: [User]
  }

  type User {
    id: ID
    name: String!
  }

```

```js
const resolvers = {
  Query: {
    user: () => users,
  },
  User: {
    id: (user) => user.id,
    name: (user) => user.name,
    email: (user) => user.email,
  },
};

```

Fazendo a consulta para pegar só o Id dos usuários

```graphql

  {
    users: {
      id
    }
  }

```