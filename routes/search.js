const express = require('express');
const router = express.Router();

const { getRecipes } = require('../api/edamam');

// @desc    Search
// @route   GET /search/:query
router.get('/', async (req, res) => {
	try {
		const query = req.query.query;
		const page = parseInt(req.query.page, 6) || 1;
		const limit = parseInt(req.query.limit, 6) || 6;
		const recipes = await getRecipes(query, page, limit);
		res.render('results', {
			recipes,
			title: `Search: ${query}`,
			query,
			page,
		});
	} catch (error) {
		console.error(`Error fetching data from Edamam api: ${error}`);
		res.status(500).send('Error fetching recipes.');
	}
});

module.exports = router;
