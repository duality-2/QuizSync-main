// Get the email and password entered by the user
const loginEmailElement = document.querySelector('.js-input-login-email')
const loginPasswordElement = document.querySelector('.js-input-login-password')

const loginButton = document.querySelector(".js-login-btn");
if (loginButton) {
  loginButton.addEventListener("click", function () {
    const enteredEmail = loginEmailElement.value.trim();
    const enteredPassword = loginPasswordElement.value;

    // Find the user with the entered email
    const user = userData.find((data) => data.email === enteredEmail);

    if (user) {
      const userId = user.id; // Get the user's id

      // Find the user again by id (demonstrating use of id)
      const userById = userData.find((data) => data.id === userId);

      if (userById && userById.password === enteredPassword) {
        alert("Login successful!");
      } else {
        alert("Incorrect password.");
      }
    } else {
      alert("No user found with this email.");
    }
  });
}

