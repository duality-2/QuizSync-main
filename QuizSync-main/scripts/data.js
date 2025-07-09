let userData = [];

function setupFormHandlers() {
  document.addEventListener("submit", function (event) {
    if (event.target.id === "signupForm") {
      event.preventDefault();

      // Get form values
      const name = document.querySelector(".js-input-signup-name").value.trim();
      const email = document
        .querySelector(".js-input-signup-email")
        .value.trim();
      const password = document.querySelector(
        ".js-input-signup-password"
      ).value;
      const confirmPassword = document.querySelector(
        ".js-input-signup-submit"
      ).value;

      // Basic validation
      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Check if email already exists
      const emailExists = userData.some((user) => user.email === email);
      if (emailExists) {
        alert("Email already registered");
        return;
      }

      // Create user object
      const userObj = {
        name,
        email,
        password,
        registrationDate: new Date().toISOString(),
      };

      // Add to userData array
      userData.push(userObj);

      console.log("User data stored:", userObj);
      console.log("All users:", userData);

      // Show success message
      alert("Account created successfully!");

      // Clear the form
      event.target.reset();

      // Close the modal
      closeModal("signupModal");

      // Reset password strength indicator
      const strengthIndicator = document.getElementById("passwordStrength");
      const strengthText = document.getElementById("strengthText");
      if (strengthIndicator) strengthIndicator.style.width = "0%";
      if (strengthText) strengthText.textContent = "Weak";
    }
  });
}

// Call both functions to ensure compatibility
// storeUserData();
setupFormHandlers();

// Function to get all stored users (for testing/debugging)
function getAllUsers() {
  return userData;
}

// Function to find user by email
function findUserByEmail(email) {
  return userData.find((user) => user.email === email);
}

// Function to clear all user data (for testing)
function clearAllUsers() {
  userData = [];
  console.log("All user data cleared");
}


