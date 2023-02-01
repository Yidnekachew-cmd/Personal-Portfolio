const formData = document.querySelector('.contact-form');
formData.addEventListener('submit', (e) => {
  e.preventDefault();
  const storage = {
    userName: document.querySelector('#user_name').value,
    userEmail: document.querySelector('#user_email').value,
    message: document.querySelector('#user_message').value,
  };

  localStorage.setItem('userData', JSON.stringify(storage));
});

const object = localStorage.getItem('userData');
const getValue = JSON.parse(object);

window.addEventListener('load', () => {
  if (localStorage.getItem('userData')) {
    document.querySelector('#user_name').value = getValue.userName;
    document.querySelector('#user_email').value = getValue.userEmail;
    document.querySelector('#user_message').value = getValue.message;
  }
});