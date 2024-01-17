# GraphQL

GraphQL é uma linguagem de consulta para API

## Types

### Primitive Types

- String

- Float

- Boolean

- ID


### Scalar

A palavra chave **scalar** permite declarar um tipo escalar, ou seja, um tipo que customizado.


```graphql

  scalar DateTime

  type Query {
    sayHello: String
    currentTime: DateTime
  }

```

## Query

Por default tudo que for colocado dentro de **{}** é considerado uma **Query**.

```graphql
    {
        name: String!
        lastName: String
    }

    # ou

    query  {
        date,
        users {
            id
        }
    }

    # ou

    query Query {
        name
    }
```

O operador **!** indica que o name é non-nullable, ou seja, não vai aceitar valor null.

## Resolvers

Para cada consulta ou estrutura montada no **typeDefs** é necessário criar um resolver. Um resolver serve para resolver os dados que a consulta precisa para ser feita, seja obtendo os dados de um banco ou qualquer outra fonte de dados.

```js

const typeDefs = `
    
    #graphql

    type Query {
        id: String!
        name: String!
    }
`;

const resolvers = {
    Query: {
        id: () => 1,
        name: () => 'Gabriel',
    },
}

```
