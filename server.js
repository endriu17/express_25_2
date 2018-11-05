var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/login-template', function(req, res) {
  res.render('login-template', {
      name: "Website for login using Google",
      url: "/auth/google"
  });
})
app.get('/auth/google', function(req, res) {
  res.send("Congratulations! You are logged in!");
  console.log('Login completed successfully!');
})

app.use(express.static(__dirname + '/public'));

app.listen(3000);
app.use(function (req, res, next){
  res.status(404).send("We're sorry, but we couldn't find your request.")
  next();
})