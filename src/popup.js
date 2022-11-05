import { getComments, setComments } from "./API-utils";


const displayPopup = async (meal) => {
  const {
    idMeal, strMeal, strMealThumb 
} = meal;

  const comments = await getComments(idMeal);

  const popup = document.createElement('div');
  popup.classList.add('modal-container');
  popup.setAttribute('id', 'modal-container');
  popup.innerHTML = `
    <div class="modal">
    <div id="close-btn" class="close-btn"><a href="#"></a></div>
    <div class="popup-content">
      <div class="popup-image">
        <img id="popup-img" class="popup-img" src="${strMealThumb}" alt="${strMeal} Image">
      </div>
      <div class="card-details">
        <div class="name">
          <h2 class="dish-name">${strMeal}</h2>
        </div>
      </div>

      <div class="meal-comments">
        <h2 class="comments-title">Comments (${comments.length > 0 ? comments.length : 0})</h2>

        <ul class="comments-list">
        <!-- Comment lists -->
        </ul>

        <div class="comment-form">
        <h3 class="form-title">Add Your Comment</h3>
        <form action="#">
          <div class="form-group">
            <label for="author" hidden="">Your name</label>
            <input type="text" id="author" placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="comment" hidden="">Your comment</label>
            <textarea name="comment" id="comment" rows="10" placeholder="Your comment"></textarea>
          </div>
          <div class="form-group">
            <button class="card-btn" type="submit">Comment</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
      `;

      /* eslint-disable */
  if (comments.length > 0) {
    const commentsList = popup.querySelector('.comments-list');

    comments.map((c) => {
      const {
        username, comment, creation_date,
      } = c;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
                <div class="comment-section">
                    <span class="comment-header">(${creation_date}) ${username}:&ensp;</span>
                    <p class="comment-body">${comment}</p>
                </div>
            `;
      return commentsList.appendChild(listItem);
    });
  }

  document.querySelector('#page-section').appendChild(popup);

  popup.querySelector('#close-btn').addEventListener('click', () => {
    popup.remove();
    document.body.style.overflow = 'auto';
  });

  popup.querySelector('.card-btn').addEventListener('click', (e) => {
    const commentsList = popup.querySelector('.comments-list');
    const user = popup.querySelector('#author').value;
    const comment = popup.querySelector('#comment').value;
    const t = new Date();
    const date = (`0${t.getDate()}`).slice(-2);
    const month = (`0${t.getMonth() + 1}`).slice(-2);
    const year = t.getFullYear();
    const fullDate = `${year}-${month}-${date}`;

    if (user.trim() !== '' && comment.trim() !== '') {
        e.preventDefault();
        setComments(idMeal, user, comment);
        const listItem = document.createElement('li');
        listItem.innerHTML = `
                  <div class="comment-section">
                      <span class="comment-header">(${fullDate}) ${user}:&ensp;</span>
                      <p class="comment-body">${comment}</p>
                  </div>
           `;
        commentsList.appendChild(listItem);
        popup.querySelector('.comment-form').reset();
      }
    });
  document.body.style.overflow = 'hidden';
}

export default displayPopup;