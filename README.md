
# Reqres User Management React App  

## Overview  
This project is a React application that integrates with the Reqres API to perform basic user management functions. It includes authentication, user listing with pagination, and the ability to edit and delete users.  

## Features  

### Level 1: Authentication  
- Users can log in using the provided credentials.  
- Authentication is handled using the Reqres API endpoint for login.  
- The credentials used are an email and password.  
- On successful login, the token is stored, and the user is redirected to the Users List page.  

### Level 2: List All Users  
- Displays a paginated list of users fetched from the API.  
- The user's first name, last name, and avatar are displayed in a structured format.  
- Pagination is implemented for smooth navigation.  

### Level 3: Edit, Delete, and Update Users  
- **Edit User:**  
  - Clicking "Edit" opens a form pre-filled with the user’s data.  
  - Allows updating the user's first name, last name, and email.  
  - The update request is sent to the API.  

- **Delete User:**  
  - Clicking "Delete" removes the user from the list.  
  - The delete request is sent to the API.  
  - Appropriate success or error messages are displayed based on the outcome.  

## Tech Stack  
- **Frontend:** React.js, React Router  
- **State Management:** useState, useEffect  
- **API Handling:** Fetch API  
- **UI Components:** CSS, Bootstrap (optional for styling)  

## Installation  
1. Clone the repository using Git.  
2. Navigate to the project directory.  
3. Install dependencies using npm.  
4. Start the development server.  

## Usage  
1. Open the application in a web browser.  
2. Log in using the provided credentials.  
3. View the list of users with pagination.  
4. Edit or delete users as needed.  

## API Reference  
- Authentication endpoint for login.  
- Endpoint to fetch users with pagination.  
- Endpoint to update a user’s details.  
- Endpoint to delete a user.  


