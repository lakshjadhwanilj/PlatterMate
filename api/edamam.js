const axios = require('axios');

const API_ID = process.env.EDAMAM_API_ID;
const API_KEY = process.env.EDAMAM_API_KEY;

const getRecipes = async (query, page, limit = 6) => {
	try {
		const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
			params: {
				type: 'public',
				q: query,
				app_id: API_ID,
				app_key: API_KEY,
			},
		});
		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;
		const results = response.data.hits.slice(startIndex, endIndex);
		if (endIndex < response.data.hits.length) {
			results.next = {
				page: page + 1,
				limit: limit,
			};
		}
		if (startIndex > 0) {
			results.prev = {
				page: page - 1,
				limit: limit,
			};
		}
		console.log('Data fetched from Edamam api.');
		return results;
	} catch (error) {
		console.error(`Error fetching data from Edamam api: ${error}`);
	}
};

const getRecipeDetails = async (id) => {
	try {
		const response = await axios.get(
			`https://api.edamam.com/api/recipes/v2/${id}`,
			{
				params: {
					type: 'public',
					id: id,
					app_id: API_ID,
					app_key: API_KEY,
				},
			}
		);
		console.log('Data fetched from Edamam api.');
		return response.data;
	} catch (error) {
		console.error(`Error fetching data from Edamam api: ${error}`);
	}
};

module.exports = { getRecipes, getRecipeDetails };
