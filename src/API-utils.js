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

// Gets all the comments of a given meal from the comments-API
const getComments = async (idMeal) => {
  const response = await fetch(`${involvementURL}comments?item_id=${idMeal}`);
  const data = await response.json();
  return data;
};

// Adds a new comments for an item in the likes-API
const setComments = async (idMeal, user, comment) => {
  await fetch(`${involvementURL}comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: idMeal,
      username: user,
      comment,
    }),
  });
};
export { getMeals, getLikes, setLikes, getComments, setComments };