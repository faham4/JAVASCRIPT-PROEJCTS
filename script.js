// script.js

// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if any field is empty
    if (!username || !email || !password) {
        alert('Please fill all fields!');
        return;
    }

    // Create a user object
    var user = {
        username,
        email,
        password
    };

    // Save the user object to local storage
    localStorage.setItem('user', JSON.stringify(user));

    alert('Signup successful!');

};

// Add event listener to the form
document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);
