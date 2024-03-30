const axios = require('axios');

const API_ID = process.env.EDAMAM_API_ID;
const API_KEY = process.env.EDAMAM_API_KEY;

const getRecipes = async (query) => {
	try {
		const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
			params: {
				type: 'public',
				q: query,
				app_id: API_ID,
				app_key: API_KEY,
			},
		});
		return response.data.hits;
	} catch (error) {
		console.error(`Error fetching data from Edamam api: ${error}`);
	}
};

module.exports = getRecipes;
