import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fs from 'fs/promises';
import path from 'path';
import resolvers from './resolvers/appResolver.js';


const server = new ApolloServer({ 
  typeDefs: await fs.readFile(path.resolve('schema', 'index.graphql'), 'utf-8'), 
  resolvers 
});

const { url } = await startStandaloneServer(server, { listen: { port: 5000 }});

console.log(`Open on ${url}`);