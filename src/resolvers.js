import {Cat, Projet} from './models/models.js';

export const resolvers = {

    Query: {
        meow: () => 'Meoowww 🐈',
        cats: async () => await Cat.find(),
        getAllProjets: async () => await Projet.find(),
        getProjet: async (_, { titre }) => {

            const projet = await Projet.find({ titre: titre });
            return projet;

        }
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
            console.log(projet);      
            return projet;  
        },

        deleteProjet: async(_, { titre }) => {
            const projet = Projet.findOneAndDelete({ titre: titre });
            projet.exec();
            return "Suppression réussie";

        }
 
    }   

};