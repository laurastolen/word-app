'use strict';

const express = require('express');
let app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3001;

require('ejs');
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`up on port ${PORT}`);
});

// ROUTES
app.get('/', showHome);
app.get('/words', showMyWords);
app.get('/search', showSearchPage);
app.get('/results', saveWord)

app.post('/search', findWord);
app.post('/results', saveWord);

function showHome(req, res) {
  res.render('index');
}

function showMyWords(req, res) {
  res.send('we will show all the words from the database here');
}

function showSearchPage(req, res) {
  res.send('here is the search form page');
}

function findWord(req, res) {
  res.send('here we will search the owl thing for a word based on form input');
}

function saveWord(req, res) {
  // here we allow user to save the selected word to the database
  console.log('we will save to database then redirect home!');

  res.redirect('/');
}
