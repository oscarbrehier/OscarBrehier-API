import {gql} from 'apollo-server-express';

export const typeDefs = gql`

    type Query {
        meow: String!
        cats: [Cat!]!
        getAllProjets: [Projet!]!
        getProjet(titre: String): [Projet!]!
    },

    type Cat {
        id: ID!,
        name: String
    },

    type Projet {
        id: ID!,
        titre: String,
        sous_titre: String,
        description: String,
        categorie: String
    },

    type Mutation {
        createCat(name: String!): Cat!,
        createProjet(titre: String, sous_titre: String, description: String, categorie: String): Projet!,
        deleteProjet(titre: String): String
    }

`;