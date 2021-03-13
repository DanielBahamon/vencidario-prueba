import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
var firebase = require('firebase');

const config = {
  apiKey: "AIzaSyBzCM8m0MsE4_mf2wjKckmVwZPc-Fj4EHU",
  authDomain: "vecindario-prueba.firebaseapp.com",
  databaseURL: "https://vecindario-prueba-default-rtdb.firebaseio.com",
  projectId: "vecindario-prueba",
  storageBucket: "vecindario-prueba.appspot.com",
  messagingSenderId: "180881473991",
  appId: "1:180881473991:web:271325bffc9645f63719e2"
}

var db = firebase.initializeApp(config);;