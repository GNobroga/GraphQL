# GraphQL

GraphQL é uma linguagem de consulta para API

## Types

### Primitive Types

- String

- Float

- Boolean

- ID

- Int


### Scalar

A palavra chave **scalar** permite declarar um tipo escalar, ou seja, um tipo customizado. A lógica de serializar e deserializar um tipo scalar é a gente que faz. Por padrão ele sempre tenta serializar e deserializar para **String**.


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

Caso uma propriedade seja diferente que a especifica na consulta, por exemplo, **usuario_logado** e **usuarioLogado** o GraphQL não irá conseguir mapear a propriedade corretamente. Pra resolver isso é possível criar um resolver pra solucionar o problema. 

```

## Create types

```graphql

    type Product {
        id: ID
        name: String!
        description: String
        price: Float!
    }

    type Query {
        product: Product
    }
```

Consultando

```graphql

    query {
        product {
            id
            name
        }
    }
```

## Others

[Fragmentos](/consult-with-fragment/FRAGMENT.md)

[Parâmetros](/consult-with-parameters/PARAMETERS.md)
