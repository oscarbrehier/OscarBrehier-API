import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    titre: String,
    sous_titre: String,
    description: String,
    categorie: String
});

export default mongoose.model('Projet', schema);