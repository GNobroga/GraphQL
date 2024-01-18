import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const users = [
    { id: 1, name: 'Gabriel Cardoso', email: 'gabrielcardosogirarde@gmail.com', role: 'ADMIN' },
    { id: 2, name: 'Gokyo', email: 'gokyo@gmail.com', role: 'USER' },
    { id: 3, name: 'Picollo', email: 'picollo@gmail.com', role: 'USER' },
]

// const typeDefs = `
//     type Query {
//         user(id: Int): User
//     }

//     type User {
//         id: Int!
//         name: String!
//         email: String!
//     }

// `;

const typeDefs = `

    type Query {
        users(role: String): [User]!
        user(id: Int): User
    }

    type User {
        id: Int!
        name: String!
        email: String!
        role: String!
    }

`;

const resolvers = {
    Query: {
        users: (parent, { role }) => users.filter(user => user.role === role),
        user: (parent, { id }) => user.find(user => user.id === id),
    } 
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 5000 }});

console.log(`Open on ${url}`);