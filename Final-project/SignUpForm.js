document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('uname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const cb = document.getElementById('cb').checked;

    console.log('SignUp Information:', {username,email,password,cb});

    alert('Sign Up Successfully! Check console for deatails.')
});
