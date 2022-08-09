const { urlencoded } = require('body-parser');
const express = require('express');
const morgan = require("morgan");
const app = express();
app.set('view engine', 'ejs');
const PORT = 8888;

//
// Database
//
const objectives = {
  'one': {question: "Why EJS Templates?", answer: "We use templates to separate business logic from the presentation layer."},
  'two': {question: "How do we implement EJS Templates?", answer: "npm i ejs, mkdir views, app.set('view engine', 'ejs');"},
  'three': {question: "What does CRUD stand for?", answer: "Create, Read, Update, Delete"},
  'four': {question: "Where are URL parameters stored?", answer: "req.params"},
  'five': {question: "Where are <form> values stored?", answer: "req.body"}
};

//
// Middleware
//
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

//
// Routes
//
app.get('/', (req,res) => {
  res.send('Monkey Fuzz!!');
});

//
// BROWSE
//
app.get('/browse', (req,res) => {

  // const instrument = 'flute';

  // const templateVars = {
  //   monkeyf: instrument,
  // };

  // const templateVars = {
  //   instrument
  // };

  const templateVars = {
    objectives: objectives
  };

  // properties of templateVars become variables in the template
  res.render('browse', templateVars);
  
});

//
// READ
//
app.get('/read/:key', (req,res) => {

  console.log('read route key:', req.params.key);

  const templateVars = {
    question: objectives[req.params.key].question,
    answer: objectives[req.params.key].answer
  };

  // properties of templateVars become variables in the template
  res.render('read', templateVars);
  
});


//
// EDIT
//

//
// ADD
//
app.get('/add', (req,res) => {
  res.render('add');
});

app.post('/new', (req,res) => {
  console.log('new route req.body:', req.body);
  objectives[req.body.key] = { question: req.body.question, answer: req.body.answer };
  res.redirect('/browse');
});

//
// DELETE
//
app.get('/delete/:key', (req,res) => {
  console.log('delete route key:', req.params.key);
  delete objectives[req.params.key];
  res.redirect('/browse');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
