import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import users from "./data.js";

const typeDefs = `
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


const resolvers = {
    Query: {
       users: () => users,
       date: () => new Date(),
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
