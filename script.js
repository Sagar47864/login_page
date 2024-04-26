document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Here you would typically send a request to your backend server for authentication
    // and handle the response accordingly. For demonstration, we'll use alerts.
    if (email === "user@example.com" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    // Here you would typically send a request to your backend server to create a new user
    // and handle the response accordingly. For demonstration, we'll use alerts.
    alert("Signup successful! Please login with your credentials.");
  });
  