// Dummy database for users
let users = [];

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    document.getElementById('loginMessage').textContent = "Login successful!";
  } else {
    document.getElementById('loginMessage').textContent = "Invalid email or password.";
  }
});

// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const phone = document.getElementById('signupPhone').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Check if user already exists
  const userExists = users.some(u => u.email === email);
  if (userExists) {
    document.getElementById('signupMessage').textContent = "User already exists!";
  } else {
    users.push({ name, phone, email, password });
    document.getElementById('signupMessage').textContent = "Signup successful! You can now login.";
    document.getElementById('signupForm').reset();
  }
});