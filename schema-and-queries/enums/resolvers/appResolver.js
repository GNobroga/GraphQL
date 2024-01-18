import { users, perfis } from '../data/db.js';

const resolvers = {
    User: {
      perfil: (parent) => perfis.find(perfil => perfil.id === parent.perfil_id),
    }, 
    Query: {
      users: () => users,
    }
}

export default resolvers;