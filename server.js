'use strict';

// SETUP AND REQUIREMENTS
const express = require('express');
let app = express();
require('ejs');
app.set('view engine', 'ejs');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
// const superagent = require('superagent');
const owlbot = require('owlbot-js');
const owlquery = owlbot(process.env.OWLBOT_TOKEN);
app.use(express.urlencoded());
app.listen(PORT, () => {
  console.log(`up on port ${PORT}`);
});


// ROUTES
app.get('/', showHome);
app.get('/words', showMyWords);
app.get('/search', showSearchPage);
app.get('/results', findWord);

app.post('/search', findWord);
app.post('/results', saveWord);


// FUNCTIONS
function showHome(req, res) {
  res.render('index');
}

function showMyWords(req, res) {
  res.send('we will show all the words from the database here');
}

function showSearchPage(req, res) {
  res.render('search')
}

function findWord(req, res) {
  let word = req.body.word;

  owlquery.define(word)
    .then(result => {
      console.log(result);

    })
    .catch(error => console.log(error)
    );

  res.render('results', { word: word });

}

function saveWord(req, res) {
  // here we allow user to save the selected word to the database
  console.log('we will save to database then redirect home!');

  res.redirect('/');
}
