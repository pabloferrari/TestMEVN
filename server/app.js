const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const usersRouter = require('./routes/users');
const User = require('./models/User');
const axios = require('axios');


// ------------------------- App ------------------------- //
const app = express();

// ----------------------- MongoDB ----------------------- //
const db = require('./config/database');
db.connect();

// ------- TEST DATA -------
User.countDocuments().then(c => {
  if(c < 10){
    axios.get('https://randomuser.me/api/?results=10&inc=name,email,username,login')
    .then(results => {
      results.data.results.map(u => {
        User.create({username:u.login.username,email:u.email,firstName:u.name.first,lastName:u.name.last}).then(usr => console.log(usr)).catch(err => console.log('error al crear usuario -> ',err));
      });
    })
    .catch(err => console.log('Error al traer usuarios de prueba...',err))
  }
})
// -------------------------

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
