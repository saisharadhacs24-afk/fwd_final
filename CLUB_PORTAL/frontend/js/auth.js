const API_URL = 'http://localhost:5000/api/auth';

// =====================
// LOGIN FUNCTION
// =====================
async function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');

    messageDiv.innerText = '';
    messageDiv.className = 'message';

    if (!email || !password) {
        messageDiv.innerText = 'Please enter email and password';
        messageDiv.classList.add('error');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            messageDiv.innerText = data.message || 'Login failed';
            messageDiv.classList.add('error');
            return;
        }

        // Save token
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);

        messageDiv.innerText = 'Login successful! Redirecting...';
        messageDiv.classList.add('success');

        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);

    } catch (error) {
        messageDiv.innerText = 'Server error. Try again later.';
        messageDiv.classList.add('error');
    }
}

// =====================
// SIGNUP FUNCTION
// =====================
async function signup() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');

    messageDiv.innerText = '';
    messageDiv.className = 'message';

    if (!username || !email || !password) {
        messageDiv.innerText = 'All fields are required';
        messageDiv.classList.add('error');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            messageDiv.innerText = data.message || 'Signup failed';
            messageDiv.classList.add('error');
            return;
        }

        messageDiv.innerText = 'Signup successful! Redirecting to login...';
        messageDiv.classList.add('success');

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1200);

    } catch (error) {
        messageDiv.innerText = 'Server error. Try again later.';
        messageDiv.classList.add('error');
    }
}
