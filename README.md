# GraphQL

GraphQL é uma linguagem de consulta para API

## Types

### Query

Por default tudo que for colocado dentro de **{}** é considerado uma **Query**.

```graphql
    type Query {
        name: String!
        lastName: String
    }
```

O operador **!** indica que o name é non-nullable, ou seja, não vai aceitar valor null.

### Resolvers

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
