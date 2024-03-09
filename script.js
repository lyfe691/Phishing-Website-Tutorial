//script.js

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('loginForm').addEventListener('submit', submitLoginForm);

function submitLoginForm(event) {
    event.preventDefault();

    console.log('Submitting login form...');

    const email = document.querySelector('#container .sign-in input[type="email"]').value;
    const password = document.querySelector('#container .sign-in input[type="password"]').value;

    console.log('Email:', email);
    console.log('Password:', password);

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.text())
    .then(data => console.log('Server response:', data))
    .catch(error => console.error('Error:', error));
}
