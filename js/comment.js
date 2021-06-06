// take the information on contact section and append to the comment section.

// 1- select the DOM elements.
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const userMail = document.querySelector('#e-mail');
const userComment = document.querySelector('#message');
const submitButton = document.querySelector('#submit');
const contactList = document.querySelector('.contact__message-list');

// 2- take that input data from the element
submitButton.addEventListener('click', () => {
  const liDOM = document.createElement('li');
  liDOM.innerHTML = `<article>
  <div class="contact__user">
  <img src="../assets/icons/user.svg" class="contact__avatar">
  <p class="contact__name">
    ${firstName.value} ${lastName.value}
  </p>
  </div>
  <address contact__mail>${userMail.value}</address>
  <p class="contact__message">
    ${userComment.value}
  </p>
</article>`
  contactList.append(liDOM);
});

// 3- concat the data
// 4- design a new comment section inside on contact
// 5- define all the style and classes to comment section
// 6- append the comments into the comment section when button is clicked
// 7- remove the comment with 'x' button