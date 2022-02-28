import {Cat, Projet} from './models/models.js';

export const resolvers = {

    Query: {
        meow: () => 'Meoowww 🐈',
        cats: async () => await Cat.find(),
        getAllProjets: async () => await Projet.find()
    },

    Mutation: {

        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save();
            return kitty;
        },
        
        createProjet: async (_, { titre, sous_titre, description, categorie}) => {
            const projet = new Projet({ titre, sous_titre, description, categorie });
            await projet.save();      
            return projet;  
        }

    }   

};