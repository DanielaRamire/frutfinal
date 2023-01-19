const express = require('express');
const app = express();
const path = require('path');

const pathHTML = path.resolve(__dirname, '../src/shoping');

app.use(express.static(pathHTML));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./messageRoute'));

