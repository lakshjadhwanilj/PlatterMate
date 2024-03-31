const express = require('express');
const router = express.Router();

const { getRecipeDetails } = require('../api/edamam');

// @desc    Recipe details page
// @route   GET /recipes/:id
router.get('/:id', async (req, res) => {
	try {
		const recipe = await getRecipeDetails(req.params.id);
		res.render('recipe', { recipe: recipe.recipe, title: recipe.recipe.label });
	} catch (error) {
		console.error(`Error fetching data from Edamam api: ${error}`);
		res.status(500).send('Error fetching recipe details.');
	}
});

module.exports = router;
