export function signup(email, password, name) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        return false;
    }
    users.push({email, password, name});
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

export function login(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('loggedIn', JSON.stringify(user));
        return true;
    }
    return false;
}

export function logout() {
    localStorage.removeItem('loggedIn');
}

export function isLoggedIn() {
    return localStorage.getItem('loggedIn') !== null;
}

export function getUser() {
    return JSON.parse(localStorage.getItem('loggedIn'));
}
