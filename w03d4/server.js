// express node app
const express = require('express');
const morgan = require('morgan');

// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const bcrypt = require('bcrypt');

const PORT = 8889;
const app = express();
app.set('view engine', 'ejs');

//
// middleware
//
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'cookiemonster',
  keys: ['XLVfZYMHAlAIWrovG1B2T6zbAYen6RHo83kL5OIJS7Ijp311e1SsOCF3rR8ZiR1W', 'fadhjfg6433786431278fhjahf6743674hfagds'],
}));

//
// database
//
const users = {
  'nally': {
    username: 'nally', 
    password: '$2b$10$tlyKoVLCedmcLf96S9xTG.vR1h.hxF2/AhMkr7u..jBgWCgT9aF46'
  },
  monkey: {
    username: 'monkey',
    password: '$2b$10$lWnraSXHZPnAYfZtH1xu3u0XiygBLoCNWGt7l.DYXC0IazDDLGYLe'
  },
};

//
// routes
//
app.get('/', (req, res) => {
  console.log('users', users);
  res.render('home');
});

// register
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  console.log(`req.body`,req.body);
//  users[req.body.username] = {username: req.body.username, password: req.body.password};
  bcrypt.genSalt(10)
    .then((salt) => {
      console.log('salt', salt);
      return bcrypt.hash(req.body.password, salt);
    })
    .then((hash) => {
      console.log('hash', hash);
      users[req.body.username] = {username: req.body.username, password: hash};
      console.log('users', users);
    });
  res.redirect('/');
});

// login
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  console.log('req.body', req.body);
  bcrypt.compare(req.body.password, users[req.body.username].password)
  .then((result) => {
    console.log('do the passwords match?', result);
    if (result) {
//      res.cookie('username', users[req.body.username].username);
      req.session.username = users[req.body.username].username;
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  });
});

// profile
app.get('/profile', (req, res) => {
  if (req.session.username) {
    res.render('profile', {username: req.session.username});
  } else {
    res.redirect('/login');
  }
});

//logout
app.get('/logout', (req, res) => {
  // clear the cookie
  // res.clearCookie('userId');
  // delete the session variable
  delete req.session.username;
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});