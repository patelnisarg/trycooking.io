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

router.post('/open', (req, res) => {
    console.log('open: ' + JSON.stringify(req.body));
    return res.json(
      {
        success: true, 
        recipe: 
        {
          name: "foo",
          ingrediants: [],
          description: 'This recepe is foo.',
          body: 'Here are the steps for the foo recipe',
          author: 'RJ'
        }
      })
  });

  router.post('/save', (req, res) => {
    console.log('save: ' + JSON.stringify(req.body));
    return res.json({
      success: true,
      id: -1
    })
  });

  router.post('/delete', (req, res) => {
    console.log('delete: ' + JSON.stringify(req.body));
    return res.json({
      success: true,
    })
  });

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));