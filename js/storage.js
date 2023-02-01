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

const retrievedObject = localStorage.getItem('userData');
const getValue = JSON.parse(retrievedObject);

