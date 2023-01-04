<h1>YouTube Clone</h1>

Welcome to our YouTube clone app! This app allows users to create, view, and delete their own videos, as well as browse and watch videos created by other users. 

This app is built using the MERN stack (MongoDB, Express, React, and Node) and incorporates the following technologies:

- Redux Toolkit for state management
- JWT cookies for authentication
- Firebase Storage for file storage

<h2>Getting Started</h2>

To get this app up and running on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. In the root directory, run <code>npm install</code> to install all required dependencies.
3. Create a <code>.env</code> file in the root directory and add the following variables:
   - <code>MONGO_URI</code>: your MongoDB connection URI
   - <code>JWT_SECRET</code>: a secret string for signing JWT cookies
   - <code>FIREBASE_API_KEY</code>: your Firebase API key
   - <code>FIREBASE_AUTH_DOMAIN</code>: your Firebase auth domain
   - <code>FIREBASE_STORAGE_BUCKET</code>: your Firebase storage bucket
4. Run <code>npm start</code> to start the app.
5. The app should now be running on <code>http://localhost:3000</code>.

<h2>Using the App</h2>

To create an account, click the "Sign Up" button in the top right corner of the page. Once you've created an account, you can sign in using the "Sign In" button.

Once you're signed in, you can create a new video by clicking the "New Video" button in the top right corner of the page. This will take you to a form where you can enter the details of your video, including its title, description, and file. You can also choose to make your video private, which will only allow you to view it yourself.

To view and delete your own videos, click on your avatar in the top right corner of the page and select "My Videos" from the dropdown menu. This will take you to a page where you can view all of your videos, as well as delete any that you no longer want.

To browse and watch videos created by other users, click on the "Browse" button in the top menu. This will take you to a page where you can view all public videos. Click on any video to watch it.

<h2>Contributing</h2>

We welcome contributions to this project! If you have an idea for a new feature or find a bug that you'd like to fix, please open a new issue or pull request.
