// take the information on contact section and append to the comment section.

// dom elements define
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const userMail = document.querySelector('#e-mail');
const userComment = document.querySelector('#message');
const submitButton = document.querySelector('#submit');
const closeButton = document.querySelector('.close-button');
const contactList = document.querySelector('.contact__message-list');

// append the item to the ul container
submitButton.addEventListener('click', () => {
  if (firstName.value && lastName.value && userMail.value && userComment.value) {
    if (userMail.value.includes('@') && userMail.value.includes('.')) {
      newComment();
      clearInput()
    } else {
      $(document).ready(function () {
        $('.toast--email').toast('show');
      })
    }
  } else {
    $(document).ready(function () {
      $('.toast--info').toast('show');
    })
  }
});


// new comment
const newComment = () => {
  const liDOM = document.createElement('li');
  liDOM.innerHTML = `<article>
  <div class="contact__user">
  <img src="./assets/icons/user.svg"class="contact__avatar" style="width: 32px; height:auto;">
  <p class="contact__name">
    ${firstName.value} ${lastName.value}
  </p>
  <button type="button" class="btn btn-danger btn-close" aria-label="Close">&times;</button>
  </div>
  <address class="contact__mail">${userMail.value}</address>
  <p class="contact__message">
    ${userComment.value}
  </p>
</article>`
  contactList.appendChild(liDOM);

  liDOM.querySelector('.btn-close').addEventListener('click', removeComment);
}

// remove comment
function removeComment() {
  this.parentNode.parentNode.parentNode.remove();
}

// clean placeholders after submit button is clicked
const clearInput = () => {
  firstName.value = null;
  lastName.value = null;
  userMail.value = null;
  userComment.value = null;
}