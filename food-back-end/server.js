//connect to database
const database = require('./database.js');
const md5 = require('blueimp-md5');


database.connect();










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
    try{
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
    }
    catch{
      return res.json({success: false}); 
    }
  });

  router.post('/save', (req, res) => {
    try{
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
    }
    catch{
      return res.json({
        success: false
      })
    }
  });

  router.post('/delete', (req, res) => {
    try{
      console.log('delete: ' + JSON.stringify(req.body));
      var auth = req.body.auth;
      auth.password = md5(auth.password);
      var id = req.body.id;
      return database.deleteRecipe(auth, id, (x) => {
        return res.json({success : x});
      })
    }
    catch{
      return res.json({
        success: false
      })
    }
  });

  router.post('/newUser', (req, res) => {
    console.log('newUser: ' + JSON.stringify(req.body));
    var username = req.body.username;
    var password = req.body.password;
    database.addUser(username, md5(password), (x) => {
      if(x){
        return res.json({success: true});
      }
      else{
        return res.json({success: false});
      }
    })
  });

  router.post('/updatePassword', (req, res) => {
    console.log('updatePassword: ' + JSON.stringify(req.body));
    var username = req.body.username;
    var password = req.body.password;
    var oldPassword = req.body.oldPassword;
    database.updateUser(username, md5(password), md5(oldPassword), (x) => {
      if(x){
        return res.json({success: true});
      }
      else{
        return res.json({success: false});
      }
    })
  });

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));