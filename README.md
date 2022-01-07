<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration) -->

Visual Novel

Description:
* This visual novel will take the user through a story, but the choices the user makes throughout will affect what story the user gets. At the end of each chapter the user will be able to see their decision tree compared to the global decisions made by other users. 

Wireframe:
![screensignup](https://user-images.githubusercontent.com/91760331/148575084-23f7ca8f-a8ed-4aaa-9db4-5837e7f147f9.png)
![signupinfo](https://user-images.githubusercontent.com/91760331/148575132-0ec04c57-8cf6-4444-b13d-b9933f19670b.png)
![loginpage](https://user-images.githubusercontent.com/91760331/148575209-bf4cb517-92d5-481a-bcaf-8429a2a9a2e5.png)
![screen1](https://user-images.githubusercontent.com/91760331/148575339-fe37bb54-75cf-4902-8a48-99ac54ce6a2d.png)
![screen2](https://user-images.githubusercontent.com/91760331/148575362-cd045945-19c5-49e8-8d73-fed24ab76bb2.png)
![choicespage](https://user-images.githubusercontent.com/91760331/148575416-340359bb-c17c-4170-8e18-75f39719cc97.png)


Plan: 

* I will be seeding my own data for the database to use
* Each dialogue line will have their own ID (dialogue model)
* Each character will have their own ID (character model)
* Each user will have their own ID (user model)
* This way I can connect certain dialogue lines to certain characters only and/or user

![ERDVN](https://user-images.githubusercontent.com/91760331/148574818-8983bd6f-b7e2-4755-b24e-e283089d84a5.png)


Nav Bar:
* Can be accessed after creating an account or logging in
* Edit name
* Start over
* Global choices (Can see choices for the chapter only after completing that certain chapter)

Page Flow for Users:
* When the user goes to the page it will have the user either Sign-up or Login
* Sign-up will have the user provide email, password, first name
* After logging in or signing up user will be able to start the story or continue where they left off
* Every page will have story dialogue, characters, and/or choices
* At the end of each chapter the user will be taken to a global choices pages which will also have a button to continue to the next chapter

Stretch Goals:
* Have the user be able to favorite certain characters and/or dialogue lines 
* Have the user have a profile that shows their favorites
* After the user makes a choice, let the user be able to "undo" that choice and choose another
* Possibly use Sass for React


Tech Stack:
* Mongoose
* Express
* React
* Node.js
* MongoDB




