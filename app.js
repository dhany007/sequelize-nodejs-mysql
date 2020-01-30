require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routerDev = require('./api/index');

const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server listening on port', port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

const model = require('./api/db/models');

model.sequelize.sync()
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err, 'Cannot connected to database');
  });

app.use(cors());

app.use(logger('dev'));
app.use('/', routerDev);

module.exports = app;
