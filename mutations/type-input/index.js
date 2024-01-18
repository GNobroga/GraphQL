import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let users = [
    { id: 1, name: 'Gabriel Cardoso', email: 'gabrielcardosogirarde@gmail.com'},
    { id: 2, name: 'Gokyo', email: 'gokyo@gmail.com' },
    { id: 3, name: 'Picollo', email: 'picollo@gmail.com'},
]



const typeDefs = `

    type Query {
        users: [User]!
    }

    type Mutation {
        newUser(name: String, email: String): User
        deleteUser(id: Int): Boolean
    }

    type User {
        id: Int!
        name: String!
        email: String!
    }
   

`;

const resolvers = {
    Query: {
        users: () => users,
    },
    Mutation: {
        newUser(parent, args) {
            const user = { id: users.length + 1, name: args.name, email: args.email };
            users.push(user);
            return user;
        },
        deleteUser(parent, { id }) {
            const lastSize = users.length;
            users = users.filter(user => user.id !== id);
            return lastSize > users.length;
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 5000 }});

console.log(`Open on ${url}`);