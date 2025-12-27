import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';
import { isLoggedIn, logout } from '../components/auth.js';
import { displayTodos } from '../components/displayTodos.js';

if (!isLoggedIn()) {
    window.location.href = 'login.html';
}

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();
document.getElementById('logout').style.display = 'inline';

document.getElementById('logout').addEventListener('click', () => {
    logout();
    window.location.href = '../../index.html';
});

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => {
        document.getElementById('todos').innerHTML = displayTodos(todos);
    });
