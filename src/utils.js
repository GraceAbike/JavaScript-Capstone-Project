import APImealsURL from './API-utils.js';

const setMealsCount = async (meals) => {
  const countElement = document.querySelector('#meals-count');
  const counter = await meals.length;
  countElement.innerHTML = `Number of Meals: (${counter})`;
  return counter;
};

const displayMeals = async () => {
  try {
    // Fetching the meals from the API
    const fetchedMeals = await fetch(APImealsURL);
    const { meals } = await fetchedMeals.json();
    // Setting the meals count
    setMealsCount(meals);
    // Get the Page-Content element to insert meal cards
    const pageContent = document.querySelector('#page-content');

    meals.map((meal) => {
      const {
        idMeal, strMeal, strMealThumb,
      } = meal;
      const mealCard = document.createElement('div');
      mealCard.classList.add('card-section');
      mealCard.innerHTML = `
      <div class="card" meal-id="${idMeal}">
          <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                  <img id="card-img" class="card-img" src="${strMealThumb}" alt="${strMeal} Image">
              </div>
          </div>
          <div class="card-content">
              <div class="title">
                  <div class="name">
                      <h2 class="meal-name">${strMeal}</h2>
                  </div> 
                  <div class="like-content">
                      <ion-icon id="heart-icon" class="heart-icon" name="heart"></ion-icon>
                      <span id="like-count" class="like-count"></span>
                  </div>
              </div>
              <div class="card-buttons">
                  <button id="comment-btn" class="card-btn">Comments</button>
                  <button id="reservation-btn" class="card-btn">Reservations</button>
              </div>
          </div>
      </div>
      `;
      // Setting the comment button event listener
      mealCard.querySelector('#comment-btn').addEventListener('click', () => {
      });

      // Setting the reservation button event listener
      mealCard.querySelector('#reservation-btn').addEventListener('click', () => {
      });

      // Setting the like button event listener
      mealCard.querySelector('#heart-icon').addEventListener('click', () => {
      });

      return pageContent.appendChild(mealCard);
    });
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
};
export default displayMeals;