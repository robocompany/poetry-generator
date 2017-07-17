const app = require('express')();
const passport = require('passport');

require('dotenv').load();
require('./config/passport')(passport);
require('./config/express')(app);

const index = require('./routes/index');
const verse = require('./routes/verse');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/verse', verse);
app.use('/auth', auth);

require('./config/error-handler')(app);
module.exports = app;
