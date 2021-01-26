# React Node Admin login
Admin login with clien side validation

### Preview - 

---

<img src="https://i.ibb.co/7WnDPxw/ezgif-com-gif-maker-1.gif" width="700" height="400" />


## Installation/Run Project -
 - Clone the project
 - cd react-login
 - npm install
 - cd client
 - npm install
 - cd ..
 - create .env and connect your mongodb by adding DB_URI
 - npm start
 - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 - E-Mail Address - hruday@gmail.com and Pasword - hruday123

## Working -
- server.js run a node server to run api to fetch the data from mongodb
- Api that fetches data from mongodb collection
- Inside 'client' folder , the client-side (React App) is there
- Redux is used for storing user login state
- Client side validation is there so that only admin can login
- Logout button is also there which sets the loggedIn state to NULL and returns to login page

## Dependencies -
- "@material-ui/core": "^4.11.3",
- "@material-ui/icons": "^4.11.2",
- "@reduxjs/toolkit": "^1.5.0",
- "axios": "^0.21.1",
- "concurrently": "^5.3.0",
- "cors": "^2.8.5",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "material-table": "^1.69.2",
- "mongoose": "^5.11.13",
- "morgan": "^1.10.0",
- "react-redux": "^7.2.2",
- "redux": "^4.0.5"

