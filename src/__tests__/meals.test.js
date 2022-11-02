const baseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';

const mealsJSON = [
  {
    idMeal: 52855,
    strMeal: 'Banana Pancakes',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
  },
  {
    idMeal: 52995,
    strMeal: 'BBQ Pork Sloppy Joes',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
  },
  {
    idMeal: 52812,
    strMeal: 'Kumpir',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
  },
];

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve(mealsJSON),
});

describe('Test-Cases: Meals Counter', () => {
  test('- Number of Meals Should Be: 3', async () => {
    const fetchedMeals = await fetch(baseURL);
    const meals = await fetchedMeals.json();
    expect(meals.length).toBe(3);
  });
});