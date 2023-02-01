


formBtn.addEventListener('click', () => {
    console.log(email);
});


function emailValidator() {

const email = document.getElementById('user_email').value;
const EMAIL_INVALID = 'Please enter a correct email address format';
const pattern = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

document.forms[0].onsubmit = function (event) {
  if (pattern.test(email)) {
    document.getElementById('message').innerHTML = 'Success!';
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').style.fontSize = '24px';
    document.getElementById('user_email').style.background = '#fff';
  } else {
    document.getElementById('message').innerHTML = EMAIL_INVALID;
    document.getElementById('message').style.color = '#fdd';
    document.getElementById('message').style.fontSize = '20px';
    document.getElementById('user_email').style.border = '1px solid #900';
    document.getElementById('user_email').style.background = '#fdd';
    event.preventDefault();

  }
}
}

