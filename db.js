const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connexion à MongoDB
const mongoDB = 'mongodb+srv://anisbenamara213:Algermahrez26@cluster0.lymmfi4.mongodb.net/krusty-krab';
mongoose.connect(mongoDB)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Impossible de se connecter à MongoDB', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion MongoDB:'));
db.once('open', () => {
  console.log('Connecté à la base de données avec succès');});

// Schéma et modèle pour la collection 'recipes'
const RecipeSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});
const Recipe = mongoose.model('Recipe', RecipeSchema);

// Schéma et modèle pour la collection 'employees'
const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  recipeID: { type: Schema.Types.ObjectId, ref: 'Recipe' }
});
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {Recipe,Employee}
