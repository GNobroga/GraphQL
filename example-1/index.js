import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import users from "./data.js";

const typeDefs = `
    #Entrypoints API
    type Query {
        users: [User]
    }

    type User {
        id: ID
        name: String
    }
`;


const resolvers = {
    Query: {
       users: () => users,
    },
    User: {
        id: (user) => user.id,
        name: (user) => user.name,
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => console.log(`Server ready at ${url}`));
