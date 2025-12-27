import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';
import { signup } from '../components/auth.js';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (signup(email, password, name)) {
        message.textContent = 'Signup successful! Redirecting to login...';
        message.className = 'message success';
        message.style.display = 'block';
        setTimeout(() => window.location.href = 'login.html', 1500);
    } else {
        message.textContent = 'User already exists!';
        message.className = 'message error';
        message.style.display = 'block';
    }
});
