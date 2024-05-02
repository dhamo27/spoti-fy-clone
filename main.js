// Get the message box element
const messageBox = document.getElementById('messageBox');

// Add event listener for mouseenter and mouseleave
document.querySelector('a').addEventListener('mouseenter', () => {
  // Show the message box when the cursor enters the element
  messageBox.style.display = 'block';
  

});

document.querySelector('a').addEventListener('mouseleave', () => {
  // Hide the message box when the cursor leaves the element
  messageBox.style.display = 'none';
});


function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate username
  if (username.length < 3 || username.length > 16) {
    alert("Username must be between 3 and 16 characters long.");
    return false;
  }

  // Validate password
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    return false;
  }

  return true;
}