// formValidation.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    
    // Registration Form Validation
    if (registrationForm) {
      registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const firstName = registrationForm.first_name.value;
        const email = registrationForm.email.value;
        const password = registrationForm.password.value;
  
        // Basic validation
        if (!firstName || !email || !password) {
          alert('Please fill in all fields');
          return;
        }
  
        // Send registration request
        try {
          const response = await fetch('/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ first_name: firstName, email, password }),
          });
  
          if (response.ok) {
            alert('Registration successful!');
            registrationForm.reset(); // Reset the form
          } else {
            const errorMessage = await response.text();
            alert(`Registration failed: ${errorMessage}`);
          }
        } catch (error) {
          console.error('Error during registration:', error);
          alert('An error occurred. Please try again.');
        }
      });
    }
  
    // Login Form Validation
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
  
        // Basic validation
        if (!email || !password) {
          alert('Please fill in all fields');
          return;
        }
  
        // Send login request
        try {
          const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
  
          if (response.ok) {
            const data = await response.json();
            alert('Login successful! Welcome, ' + data.patientName);
            window.location.href = '/'; // Redirect to homepage or dashboard
          } else {
            const errorMessage = await response.text();
            alert(`Login failed: ${errorMessage}`);
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred. Please try again.');
        }
      });
    }
  });
  