const mongo = require ("mongoose");
const Schema =mongo.Schema; 
const userSchema = new Schema({
    name: String,
    email: String,
    cin: Number
});

module.exports = mongo.model("user", userSchema,'user'); // 'user' is the name of the collection in MongoDB the 'user' collection.
// This code defines a Mongoose schema for a User model with fields for name, email, and cin.
// It exports the model so it can be used in other parts of the application to interact with the 'users' collection.