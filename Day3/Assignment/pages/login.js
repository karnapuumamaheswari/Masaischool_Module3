import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';
import { login } from '../components/auth.js';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (login(email, password)) {
        message.textContent = 'Login successful! Redirecting...';
        message.className = 'message success';
        message.style.display = 'block';
        setTimeout(() => window.location.href = 'todos.html', 1500);
    } else {
        message.textContent = 'Invalid email or password!';
        message.className = 'message error';
        message.style.display = 'block';
    }
});
