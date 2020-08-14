const express = require('express');
const router = express.Router();

const Recipe = require('../../model/Recipe');

// @route GET req
// @desc get all recipes 
router.get('/', (req, res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
});

// @route POST req
// @desc create new recipe
router.post('/', (req, res) => {
    const recipeToAdd = new Recipe({
        name: req.body.name,
        description: req.body.description,
    });

    recipeToAdd.save()
    .then((recipe) => res.json(recipe))
});

// @route DELETE req
// @desc delete a recipe by id
router.delete('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => recipe.remove()
            .then(() => res.json({
                succes: true,
                message: `You removed recipe with id: ${req.params.id}`
            }))
            .catch(err => res.status(404).json({succes: false}))
        )
});

module.exports = router;