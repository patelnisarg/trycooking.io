const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const url = require('url');





const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));





router.get('/ping', (req, res) => {
    console.log('ping: ' + JSON.stringify(req.body));
    return res.json({ success: true });
  });