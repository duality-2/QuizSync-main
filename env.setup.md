# Environment Setup for QuizSync

To set up your environment variables, create a `.env` file in the root directory with the following content:

```
# React environment variables
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000

# Node environment
NODE_ENV=development
PORT=5000

# Database configurations (for future use)
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=quizsync

# JWT Secret (for future use)
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# Email service (for future use)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
```

## Important Notes:

1. **Security**: Never commit your `.env` file to version control. It's already added to `.gitignore`.

2. **Required Variables**:
   - For development, the `PORT` variable is essential (default: 5000).
   - For React app, `REACT_APP_API_URL` is needed for API requests.

3. **Database Setup**:
   - Configure your database settings when the backend is implemented.
   - Default MySQL settings are provided but can be changed.

4. **JWT Configuration**:
   - Generate a strong secret key for JWT authentication.
   - Example: Use a random string generator or a crypto library.

5. **Email Service**:
   - Only required if email functionality is implemented.
   - For Gmail, you might need to set up an app password. 