const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
  res.render('maintenance.hbs');
});
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.render('home.hbs', {
    pageTitle: 'home Page',
    welcomeMessage: 'Welcome!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });

});

app.get('/bad', (req, res) => {
  res.send({
    Error: 'Unauthrised Access'
  });
});

app.listen(port, () => {
  console.log(`Sever is runing on port: ${port}`);
});
