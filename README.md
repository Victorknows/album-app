### Albums App Documentation

## Overview

The Albums App is a React-based web application designed to explore users and their photo albums. Users can sign in, browse user profiles, view albums, and explore photos within albums. It leverages the jsonplaceholder.typicode.com API for user, album, and photo data.

# Features

# 1. User Management

Landing Page

Users can sign in with Google to access the app.

A welcome message introduces the app's features.

Home Page

Displays a list of users fetched from the API.

Allows navigation to a user's albums.

2. Album Management

Album Page

Displays albums for a selected user.

Allows navigation to view photos in an album.

3. Photo Management

Photos Page

Displays photos within a selected album.

Allows navigation to view photo details.

Photo Details Page

Displays photo details, including title and full image.

Enables editing of photo titles with real-time feedback via react-toastify notifications.

## Code Structure

# Pages

LandingPage.js

Handles user sign-in using Firebase.

Redirects to the Home Page after successful login.

HomePage.js

Fetches and displays a list of users.

Users can navigate to a specific user's albums.

AlbumPage.js

Fetches and displays albums for a selected user.

Users can navigate to an album's photos.

PhotosPage.js

Fetches and displays photos in a grid layout.

Users can navigate to view photo details.

PhotoDetails.js

Fetches and displays detailed information about a photo.

Enables title editing with toast notifications.

Styling

Each page has its own CSS module to encapsulate styles and maintain modularity.

Components like buttons and grids are styled for consistent user experience.

## API Integration

Endpoints Used

https://jsonplaceholder.typicode.com/users - Fetches user data.

https://jsonplaceholder.typicode.com/users/{userId}/albums - Fetches albums for a user.

https://jsonplaceholder.typicode.com/albums/{albumId}/photos - Fetches photos in an album.

https://jsonplaceholder.typicode.com/photos/{photoId} - Fetches details of a specific photo.

# Error Handling

Uses try-catch blocks to handle API errors gracefully.

Displays error messages for failed fetch requests.

Navigation Flow

Landing Page

Sign in and navigate to the Home Page.

Home Page

Select a user to view their albums.

Album Page

Select an album to view its photos.

Photos Page

Select a photo to view its details.

Photo Details Page

View and edit photo details.

Libraries and Tools Used

React: For building the user interface.

React Router: For managing navigation and routing.

React Icons: For adding icons to the UI.

React Toastify: For displaying notifications.

Firebase: For Google Sign-In functionality.

CSS Modules: For modular and scoped styling.

Future Enhancements

Add user authentication with persistent sessions.

Enable uploading and managing user-created albums and photos.

Improve UI responsiveness for mobile devices.

Implement search functionality for users, albums, and photos.

Setup Instructions

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Start the development server:

npm start

Open the app in your browser at http://localhost:3000.
