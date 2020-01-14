'use strict';

const express = require('express');
let app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`up on port ${PORT}`);
});

app.get('/', showHome);

function showHome(req, res) {
  res.send('on the home');
}