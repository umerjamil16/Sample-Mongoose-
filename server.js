//Following: https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications#defining-a-model

 var express = require("express");
 var app = express();
 var PORT = process.env.PORT;

var User = require('./models/user');
  
// create a new user called chris
var chris = new User({
  name: 'Chrasdis',
  username: 'asdas123',
  password: 'password' 
});


// call the built-in save method to save to the database
// chris.save(function(err) {
//   if (err) throw err;

//   console.log('User saved successfully!');
// });
 
 // get all the users
// User.find({}, function(err, users) {
//   if (err) throw err;

//   // object of all the users
//   console.log(users);
// });

// get the user starlord55
// User.find({ username: 'sevilayha' }, function(err, user) {
//   if (err) throw err;

//   // object of the user
//   console.log(user);
// });

// // get a user with ID of 1
// User.findById("57f48ff081946f10dc2f959f", function(err, user) {
//   if (err) throw err;

//   // show the one user
//   console.log(user);
// });

// get any admin that was created in the past month

// // get the date 1 month ago
// var monthAgo = new Date();
// monthAgo.setMonth(monthAgo.getMonth() - 1);

// User.find({ admin: false }).where('created_at').gt(monthAgo).exec(function(err, users) {
//   if (err) throw err;

//   // show the admins in the past month
//   console.log(users);
// });

// get a user with ID of 1
// User.findById("57f48ff081946f10dc2f959f", function(err, user) {
//   if (err) throw err;

//   // change the users location
//   user.location = 'uk';

//   // save the user
//   user.save(function(err) {
//     if (err) throw err;

//     console.log('User successfully updated!');
//   });

// });

// find the user sevilayha
// update him to starlord 88
// User.findOneAndUpdate({ username: 'sevilayha' }, { username: 'starlord88' }, function(err, user) {
//   if (err) throw err;

//   // we have the updated user returned to us
//   console.log(user);
// });

 app.get("/", function(req, res, next){
   res.send("...");
 });
 
 app.listen(PORT, function(){
   console.log("Server running on PORT: "  + PORT);
 });
 
 