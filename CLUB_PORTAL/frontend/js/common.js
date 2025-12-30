// common.js — shared logic for all pages

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}

if (!localStorage.getItem('token')) {
    if (!location.pathname.includes('login.html') &&
        !location.pathname.includes('signup.html')) {
        window.location.href = 'login.html';
    }
}

