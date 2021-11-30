var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

const cors = require('cors');

var usersRouter = require('./Routes/users');

require('dotenv').config();

var app = express();

//Setting the Cors
app.use(cors({
  origin: ["", "http://localhost:3000"],
  credentials: true
}));


app.set('trust proxy', true)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, () => {
  console.log("server started on port 3000");
})