import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import users from "./data.js";

const typeDefs = `

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


const resolvers = {
    Product: {
        discountPrice: (parent) => {
            return parent.price - (parent.price * parent.discount);
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

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => console.log(`Server ready at ${url}`));
