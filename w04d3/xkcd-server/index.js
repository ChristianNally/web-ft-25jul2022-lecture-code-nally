const express = require('express');
const morgan = require('morgan');
const app = express();

//
// Config
//
app.set('view engine', 'ejs');

//
// Middleware
//
//app.use(express.bodyParser({extended: false}));
app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('home');
});

app.listen(8778, () => {
  console.log(`XKCD Server is listening on port 8778`);
});