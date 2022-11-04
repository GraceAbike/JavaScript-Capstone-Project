import { getMeals, getLikes, setLikes } from './API-utils.js';
import displayPopup from './popup.js';

const setMealsCount = async (count) => {
  const mealsCount = await document.querySelector('#meals-count');
  mealsCount.innerHTML = await `${count} Meals`;
  return mealsCount;
};

const displayMeals = async () => {
  try {
    const { meals } = await getMeals();
    const mealsLikes = await getLikes();
    setMealsCount(meals.length);
    const pageContent = document.querySelector('#page-content');
    meals.map((meal) => {
      const {
        idMeal, strMeal, strMealThumb,
      } = meal;
      const likes = mealsLikes.filter((like) => like.item_id === idMeal);
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
              <span id="like-count" class="like-count">${likes.length > 0 ? likes[0].likes : 0} Likes</span>
            </div>
          </div>
          <div class="card-buttons">
            <button id="comment-btn" class="card-btn">Comments</button>
            <button id="reservation-btn" class="card-btn">Reservations</button>
          </div>
        </div>
      </div>`;
      mealCard.querySelector('#comment-btn').addEventListener('click', () => {
        displayPopup(meal);
      });
      mealCard.querySelector('#reservation-btn').addEventListener('click', () => {
      });
      mealCard.querySelector('#heart-icon').addEventListener('click', (e) => {
        const likeCount = e.target.parentElement.querySelector('#like-count');
        setLikes(idMeal);
        likeCount.innerHTML = `${likes[0].likes + 1} Likes`;
      });

      return pageContent.appendChild(mealCard);
    });
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
};
export default displayMeals;