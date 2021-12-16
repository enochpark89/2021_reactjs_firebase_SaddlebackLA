import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseapp, auth} from './firebase'

// confirm access to the Firebase database
//console.log(firebaseapp);
//console.log(auth);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
