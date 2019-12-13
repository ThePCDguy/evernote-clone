import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {};
firebase.initializeApp({
  apiKey: "AIzaSyBY7dlHmY_7Ie3x0cw-C-l5DGJo-r6Fz_I",
  authDomain: "evernote-clone-v01.firebaseapp.com",
  databaseURL: "https://evernote-clone-v01.firebaseio.com",
  projectId: "evernote-clone-v01",
  storageBucket: "evernote-clone-v01.appspot.com",
  messagingSenderId: "986720496068",
  appId: "1:986720496068:web:25b0dc716ef9b172efdc91"
});

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
