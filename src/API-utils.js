import { APImealsURL, involvementURL } from './api-urls.js';

/* Fetch the meals list from MealsDB-API */
const getMeals = async () => {
  const response = await fetch(APImealsURL);
  const data = await response.json();
  return data;
};

// Adds a new like for an item in the likes-API
const setLikes = async (idMeal) => {
  await fetch(`${involvementURL}likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: idMeal,
    }),
  });
};

// Gets all items from the likes-API
const getLikes = async () => {
  const response = await fetch(`${involvementURL}likes/`);
  const data = await response.json();
  return data;
};

export { getMeals, getLikes, setLikes };