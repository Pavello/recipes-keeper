const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
});

module.exports = Recipe = mongoose.model('recipe', recipeSchema);