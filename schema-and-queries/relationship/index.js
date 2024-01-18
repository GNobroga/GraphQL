import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const users = [
    { id: 1, name: 'Gabriel Cardoso', email: 'gabrielcardosogirarde@gmail.com', perfil_id: 1 },
    { id: 2, name: 'Gokyo', email: 'gokyo@gmail.com', perfil_id: 2},
    { id: 3, name: 'Picollo', email: 'picollo@gmail.com', perfil_id: 3 },
];

const perfis = [
    { id: 1, name: 'ADMIN' },
    { id: 2, name: 'USER' },
];

const typeDefs = `

    type Query {
        users: [User]!
    }
    
    type Perfil {
        id: Int!
        name: String!
    }

    type User {
        id: Int!
        name: String!
        email: String!
        perfil: Perfil!
    }

`;

const resolvers = {
  User: {
    perfil: (parent) => perfis.find(perfil => perfil.id === parent.perfil_id),
  }, 
  Query: {
    users: () => users,
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 5000 }});

console.log(`Open on ${url}`);