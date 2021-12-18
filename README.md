# SaddlebakLA 1.0

- This gives social network features for a SaddlebackLA church

# POC

- This project will work as a Proof of Concept for below:

# Frontend
- [ ] Home
- [ ] CSS
- [ ] JavaScript
- [ ] ReactJS
    - Styled Components
    - Global Style


# Backend
- Firebase


# Development

# 1. Installation

- install reactjs
- launch an app from a firebase

*How do you launch an app?*

Steps:
1. 

- install firebase

*How do you install a firebase?*

Ways to install:
1. CDN
2. Use firebase

2. Use npm package to install a firebase

URL: https://www.npmjs.com/package/firebase

Steps:

1. Install firebase with npm

```shell
npm install --save firebase
```

2. Create a file called firebase.js that has a firebase configuration.
firebase.js
```js
// This configuration is given by Google.
// Your web app's Firebase configuration
const firebaseConfig = {
.... (hidden)
};
```

3. Export out the app and import from index.js

index.js
```js
import app from './firebase'
console.log(app);
```
firebase.js
```js
......
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
```

4. Confirm firebase initialization by console logging the app. 

# 2. Secure keys

- It is not a good idea to store the key to Github since it is public. 

Steps:
1. Create .env file
```js
REACT_APP_API_KEY =
REACT_APP_AUTH_DOMAIN =
REACT_APP_DATABASE_URL =
REACT_APP_PROJECT_ID =
REACT_APP_STORAGE_BUCKET =
REACT_APP_MESSAGIN_ID =
REACT_APP_APP_ID =
REACT_APP_MEASUR_ID =
```
2. Put keys there and use it from the src > firebase.js

# 3. Router setup

1. Install react-router-dom library that helps create routes

```js
npm install react-router-dom
```



# 3. GlobalStyle

# 4. Container and sections

- Created Header
- Created Container that has three sections

# 5. Style
- Used styled components to style.
- Used styles similar to Twitter. 

Routes:
1. Create the Github and Google Login with buttons
2. Create Right-side pane with multiple nav - test the router that changes the middle section. 
3. Style the Right-side pane.    


# 6. Router > Center section rendering.


*Create md page on reactjs?*
- It works using library called react-markdown
Steps:
1. Fetch md
2. Put it on the state's children
3. use react-markdown to display the result as JSX.

*I might have to rearrange my code. Move home to app.js*

# 7. Set up authentication

1. Create jsconfig file 

2. Create the authentication using getAuth and createUserWithEmailAndPassword from "firebase/auth"

```js
```

# 8. DB set up

1. Create a database.

```js
```

2. Cloud Firestore.

- Create DB
    - test mode
    - production mode

3. import database
```js
import "firebase/database";

```

# 9. Cloud Firestore

- Unlike other DB, you don't have to program a lot to create a db. 
- However, there are some restrictions. 
- Collection > folder or group of documents. 

Steps:
1. Create a collection
*Collection is a group of documents*
2. Import a db from the app. 
3. Add data to a specific collection.
- key:value
4. 

# 10. Realtime Nweet

- We know who wrote a tweet or a comment by the uniqueID autogenerated from the Firebase. 
*Look at collection reference*


*Problem: the saved tweet does not appear in the descending order it was created*

Solution: you can use .OrderBy() function to order by the descending order of how it was created.

*Problem: AFter the comment is updated, it does not show the comment in real-time so you need to refresht the page.*

Solution: 
*use .map because it does not re-render which will make it faster*
*Two layers of inheriting props is ok -nico-*

Before I do the changes, I changed the structure of the route so that router.js would be the one who will handle most of the routes and updating of changes. This seems like a better structure for me. 

```text
├─ src
│  ├─ App.js
│  ├─ components
│  │  ├─ Header.js
│  │  ├─ LeftContainer.js
│  │  ├─ RightContainer.js
│  │  ├─ Router.js
│  │  ├─ Test.js
│  │  └─ Tweet.js
│  ├─ firebase.js
│  ├─ img
│  │  ├─ jQuery.md
│  │  ├─ reactjs.png
│  │  └─ SaddlebackLogo.svg
│  ├─ index.js
│  ├─ routes
│  │  └─ Home.js
│  └─ theme
│     └─ GlobalStyle.js
└─ webpack.config.js
```
