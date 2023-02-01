const userEmail = document.getElementById('user_email').value;
const formBtn = document.getElementById('form-btn');
const pattern = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const EMAIL_INVALID = 'Please enter a correct email address format';

function emailValidator(event) {
  if (pattern.test(userEmail)) {
    document.getElementById('message').innerHTML = 'Success!';
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').style.fontSize = '24px';
  } else {
    document.getElementById('message').innerHTML = EMAIL_INVALID;
    document.getElementById('message').style.color = '#fdd';
    document.getElementById('message').style.fontSize = '20px';
    document.getElementById('user_email').style.border = '1px solid #900';
    document.getElementById('user_email').style.background = '#fdd';
    event.preventDefault();
  }
}

formBtn.addEventListener('click', emailValidator);