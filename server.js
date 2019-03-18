const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const usersRouter = require('./routes/usersRouter');


const PORT = 3001;
const app = express();


app.use('/users', usersRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is up and listening on ${PORT}`);
})'
