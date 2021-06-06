// take the information on contact section and append to the comment section.

// dom elements define
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const userMail = document.querySelector('#e-mail');
const userComment = document.querySelector('#message');
const submitButton = document.querySelector('#submit');
const closeButton = document.querySelector('.close-button');
const liElement = document.querySelector('li');
const contactList = document.querySelector('.contact__message-list');

// append the item to the ul container
submitButton.addEventListener('click', () => {
  if (firstName.value && lastName.value && userMail.value && userComment && (userMail.value.includes('@') && userMail.value.includes('.'))) {
    newComment();
  } else {
    return;
  }
});

const newComment = () => {
  const liDOM = document.createElement('li');
  liDOM.innerHTML = `<article>
  <div class="contact__user">
  <img src="../assets/icons/user.svg" class="contact__avatar">
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
  contactList.append(liDOM);

  removeComment()
}

const removeComment = () => {
  closeButton.addEventListener('click', removeElement);
}