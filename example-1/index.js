import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
    #Entrypoints API
    type Query {
        date: String!
    }
`;


const resolvers = {
    Query: {
        date: () => new Date().toISOString(),
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => console.log(`Server ready at ${url}`));
