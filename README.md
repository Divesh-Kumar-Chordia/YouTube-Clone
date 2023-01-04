YouTube Clone
Welcome to our YouTube clone app! This app allows users to create, view, and delete their own videos, as well as browse and watch videos created by other users.

This app is built using the MERN stack (MongoDB, Express, React, and Node) and incorporates the following technologies:

Redux Toolkit for state management
JWT cookies for authentication
Firebase Storage for file storage
Getting Started
To get this app up and running on your local machine, follow these steps:

Clone this repository to your local machine.
In the root directory, run npm install to install all required dependencies.
Create a .env file in the root directory and add the following variables:
MONGO_URI: your MongoDB connection URI
JWT_SECRET: a secret string for signing JWT cookies
FIREBASE_API_KEY: your Firebase API key
FIREBASE_AUTH_DOMAIN: your Firebase auth domain
FIREBASE_STORAGE_BUCKET: your Firebase storage bucket
Run npm start to start the app.
The app should now be running on http://localhost:3000.
Using the App
To create an account, click the "Sign Up" button in the top right corner of the page. Once you've created an account, you can sign in using the "Sign In" button.

Once you're signed in, you can create a new video by clicking the "New Video" button in the top right corner of the page. This will take you to a form where you can enter the details of your video, including its title, description, and file. You can also choose to make your video private, which will only allow you to view it yourself.

To view and delete your own videos, click on your avatar in the top right corner of the page and select "My Videos" from the dropdown menu. This will take you to a page where you can view all of your videos, as well as delete any that you no longer want.

To browse and watch videos created by other users, click on the "Browse" button in the top menu. This will take you to a page where you can view all public videos. Click on any video to watch it.

Contributing
We welcome contributions to this project! If you have an idea for a new feature or find a bug that you'd like to fix, please open a new issue or pull request.
