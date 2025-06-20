const mongo = require ("mongoose");
const Schema =mongo.Schema; 
const userSchema = new Schema({
    nom: String,
    prix: Number
});

module.exports = mongo.model("plat", userSchema,'plats'); // 'plats' is the name of the collection in MongoDB the 'plat' collection.
// This code defines a Mongoose schema for a Plat model with fields for nom and prix.