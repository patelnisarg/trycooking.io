//connect to database
const database = require('./database.js');
const md5 = require('blueimp-md5');


database.connect();



//debug code to insert
var recipe =  {
  id: 42,
  name: "fuck off",
  ingrediants: [0, 2],
  description: 'This recepe is foo.',
  body: 'Here are the steps for the foo recipe',
  author: 'RJ'
}

console.log('calling');
database.saveRecipe(recipe, {username: 'RJ', p_hash: md5('FOO')}, (x) => {console.log(x)});
database.openRecipe(3, (x) => {});

//database.addUser('RJ', md5('FOO'), (x) => console.log(x));
//database.updateUser('RJ', md5('FOO'), md5('BAR'), (x => console.log(x)));










//bootstrap server
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



//link api to server
router.get('/ping', (req, res) => {
    console.log('ping: ' + JSON.stringify(req.body));
    return res.json({ success: true });
  });

router.post('/open', (req, res) => {
    console.log('open: ' + JSON.stringify(req.body));
    try{
      database.openRecipe(
        req.body.id, 
        (x) => {
          return res.json({success: true, recipe: x})
        });
    }
    catch{
      return {success: false, recipe: {}};
    }
  });

  router.post('/save', (req, res) => {
    var body = req.body;
    var recipe = body.recipe;
    recipe.id = body.id;
    var auth = body.auth;
    auth.p_hash = md5(auth.password);
    console.log('save: ' + JSON.stringify(req.body));
    database.saveRecipe(recipe, auth, (x) => {
      return res.json({
        success: x !== -1,
        id: x
      })
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