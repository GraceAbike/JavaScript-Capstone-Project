const displayPopup = async (meal) => {
  const {
    strMeal, strMealThumb,
  } = meal;
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
        <h2 class="comments-title">Comments 10</h2>
        <ul class="comments-list">
        <li>
          <div class="comment-section">
            <span class="comment-header">01/12/2022: GraceAbike</span>
            <p class="comment-body">I'd love to buy it</p>
          </div>
          </li>
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
  document.querySelector('#page-section').appendChild(popup);
  popup.querySelector('#close-btn').addEventListener('click', () => {
    popup.remove();
    document.body.style.overflow = 'auto';
  });
  // popup.querySelector('#comment_form').addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     const commenterName = popup.querySelector('#commenter_name').value;
  //     const commentText = popup.querySelector('#comment_text').value;
  //     const comment = document.createElement('div');
  //     comment.classList.add('comment');
  //     comment.innerHTML = `
  //     <div class="comment-header">
  //         <h3>${commenterName}</h3>
  //         <span class="comment-date">Date</span>
  //     </div>
  //     <p class="comment-text">${commentText}</p>
  //     `;
  //     popup.querySelector('.comments-content').appendChild(comment);
  //     popup.querySelector('#comment_form').reset();
  // });
  document.body.style.overflow = 'hidden';
};
  // displayPopup(meal){
  // }
export default displayPopup;