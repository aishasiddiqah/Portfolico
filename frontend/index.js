// to display the sign-up popup
function openSignup() {
    document.getElementById("popupSignup").style.display = "block";
    document.getElementById("popupLogin").style.display = "none";
}

// to close the sign-up popup
function closeSignup() {
    document.getElementById("popupSignup").style.display = "none";
}

// to display the login popup
function openLogin() {
    document.getElementById("popupLogin").style.display = "block";
    document.getElementById("popupSignup").style.display = "none";
}

// to close the login popup
function closeLogin() {
    document.getElementById("popupLogin").style.display = "none";
}

// for menu
function openMenu() {
    document.getElementById("popupMenu").style.display = "block";
}

// to close the menu popup
function closeMenu() {
    document.getElementById("popupMenu").style.display = "none";
}


// Signup Functionality
document.getElementById('signup-btn').addEventListener('click', () => {
    const name = document.getElementById('nameSignup').value;
    const email = document.getElementById('emailSignup').value;
    const password = document.getElementById('passwordSignup').value;
    const confirm = document.getElementById('confirmSignup').value;

    if (name && email && password && confirm) {
        localStorage.setItem('user', JSON.stringify({ name, email, password, confirm }));
        alert('Sign Up Successful! Redirecting to Login page...');

        document.getElementById('signup').classList.add('hidden');
        document.getElementById('login').classList.remove('hidden');
    } else {
        alert('Please fill in all fields.');
    }
});

// Login Functionality
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
