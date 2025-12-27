import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';
import { isLoggedIn, getUser, logout } from '../components/auth.js';

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

const content = document.getElementById('content');

if (isLoggedIn()) {
    const user = getUser();
    content.innerHTML = `<p>Welcome ${user.name}!</p>`;
    document.getElementById('logout').style.display = 'inline';
} else {
    content.innerHTML = `<p><a href="pages/signup.html">Sign Up</a> | <a href="pages/login.html">Login</a></p>`;
}

document.getElementById('logout')?.addEventListener('click', () => {
    logout();
    window.location.href = 'index.html';
});
