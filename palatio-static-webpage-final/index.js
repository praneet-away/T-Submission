const express = require('express');
const firebase = require('firebase');
const fs = require('fs');

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyBq0TEhtMyijalc-AUdM7Frw87CM5qLcu0",
  authDomain: "palatiopage.firebaseapp.com",
  databaseURL: "https://https://palatiopage.firebaseio.com/.firebaseio.com",
  storageBucket: "gs://palatiopage.appspot.com.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();


// Init express
const app = express();
app.get('/', function(req,res){
    res.render('./index.html')
});

//Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000....');
});