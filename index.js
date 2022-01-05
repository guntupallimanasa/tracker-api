const mongoose = require('mongoose');
const express = require('express');
var app = express()
const cors = require('cors');
const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
const PORT = 7002;

app.use(cors())
app.use(express.json());

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(PORT, () => {
  console.log(`hmm listeneing ****${PORT}`);
});

mongoose.connect('mongodb+srv://manasa:manusankar@cluster0.fyur2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongodb connected::::::::::::::**************************::::::')
  })
