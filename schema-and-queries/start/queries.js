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


const secondResolvers = {
    Product: {
        discountPrice: (parent) => {
            if (parent.discount) {
                return parent.price * (1 - parent.discount);
            }
            return parent.price;
        },
    },
    Query: {
        product: () => ({
            name: 'Notebook',
            price: 500,
            discount: 0.50
        }),
    }

};