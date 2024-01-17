const firstQuery = `
    #Entrypoints API

    scalar DateTime

    type Query {
        users: [User]
        date: DateTime
    }

    type User {
        id: ID
        name: String
    }
`;


const secondQuery = `

    type Query {
        product: Product
    }
   
    type Product {
        name: String!
        price: Float!
        discount: Float
        discountPrice: Float
    }
`;
