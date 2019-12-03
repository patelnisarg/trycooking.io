
//The require statements here are like imports in other languages
const fs = require('fs');
const sqlite3 = require('sqlite3');






//Here are some constants, the script needs
const database_path = './database.sqlite';

const initializationSQL = fs.readFileSync('./SQL/CREATE_DATABASE.SQL', 'utf8');
const initCountersSQL = fs.readFileSync('./SQL/INITIALIZE_COUNTERS.SQL', 'utf8');

const setCountersSQL = fs.readFileSync('./SQL/SET_COUNTER.SQL', 'utf8');
const getCountersSQL = fs.readFileSync('./SQL/GET_COUNTER.SQL', 'utf8');

const saveSQL = fs.readFileSync('./SQL/SAVE_RECIPE.SQL', 'utf8');
const openSQL = fs.readFileSync('./SQL/OPEN_RECIPE.SQL', 'utf8');

const setIngrediantSQL = fs.readFileSync('./SQL/SET_INGREDIANT.SQL', 'utf8');
const getIngrediantSQL = fs.readFileSync('./SQL/GET_INGREDIANTS.SQL', 'utf8');
const wipeRecipeIngrediantsSQL = fs.readFileSync('./SQL/WIPE_RECIPE_INGREDIANTS.SQL', 'utf8');


const getUserAuthSQL = fs.readFileSync('./SQL/GET_USER_FOR_AUTH.SQL', 'utf8');
const updateUserSQL = fs.readFileSync('./SQL/UPDATE_USER.SQL', 'utf8');
const insertUserSQL = fs.readFileSync('./SQL/INSERT_USER.SQL', 'utf8');

const deleteRecipeSQL = fs.readFileSync('./SQL/DELETE_RECIPE.SQL', 'utf8');



//Field for the connection to the database
var db;








//The functions for this file
function connect() {
    db = new sqlite3.Database(database_path, (err) => 
    {
        if (err){ 
            console.log(err.message);
        }
        
        db.exec(initializationSQL);

        db.run(initCountersSQL);

        console.log('DB Ready');
    });
};

function saveRecipe(recipe, auth, eventHandler){
    if(recipe.author !== auth.username){
        return eventHandler(-1);
    }
    else{
        authenticateUser(auth.username, auth.p_hash, (x)=>{
            if(x){
                if(recipe.id == -1){
                    db.get(getCountersSQL, ['CURRENT_RECIPE_ID'], 
                        (err, row) => {
                            if(err){
                                return console.error(err.message);
                            }
                            else{
                                var id = row.FIELD_VALUE;
                                var nextID = id + 1;
                                db.run(setCountersSQL, [nextID, 'CURRENT_RECIPE_ID']);
                                return saveRecipeWithID(recipe, id, eventHandler);
                            }});
                }
                else{
                    return saveRecipeWithID(recipe, recipe.id, eventHandler);
                }
            }
            else{
                return eventHandler(-1);
            }
        });
    }
}

function saveRecipeWithID(recipe, id, eventHandler){
    db.run(saveSQL, [id, recipe.author, recipe.name, recipe.description, recipe.body]);
    db.run(wipeRecipeIngrediantsSQL, [id], (err, row) =>{
        if(!err){
            recipe.ingrediants.forEach((x) => {
                db.run(setIngrediantSQL, [id, x]);
            });
            return eventHandler(id);    
        }
    });
}

function openRecipe(id, eventHandler){
    db.get(openSQL, [id], 
        (err, row) =>
        {
            if(err){
                return console.error(err.message);
            }
            else{
                db.all(getIngrediantSQL, [id], (err2, row2) => {
                    if(err2){
                        return console.error(err.message);
                    }
                    else{
                        try{
                        return eventHandler({
                            id: row.ID,
                            name: row.RECIPE_NAME,
                            ingrediants: row2.map((x) => x.id),
                            description: row.RECIPE_DESCRIPTION,
                            body: row.RECIPE_BODY,
                            author: row.RECIPE_AUTHOR
                        });
                        }
                        catch{
                            
                        }
                    }
                });
                
            }
        });
}

function deleteRecipe(auth, id, eventHandler){
    console.log(JSON.stringify(auth));

    var username = auth.username;
    var password = auth.password;


    return authenticateUser(username, password, (x) => {
        if(x){
            db.run(deleteRecipeSQL, [id, username], (err, row) => {
                if(err){
                    return eventHandler(false);
                }
                else{
                    db.run(wipeRecipeIngrediantsSQL, [id], (err, row) => {
                        if(err){
                            return eventHandler(false);
                        }
                        else{
                            return eventHandler(true);
                        }
                    });
                }
            });
        }
        else{
            return eventHandler(false);
        }
    });
}







//user management functions
function addUser(username, p_hash, eventHandler){
    db.run(insertUserSQL, [username, p_hash], (err, row) => {
        if(err){
            console.error(err.message);
            return eventHandler(false);
        }
        else{
            return eventHandler(true);
        }
    });
}

function updateUser(username, p_hash, old_p_hash, eventHandler){
    authenticateUser(username, old_p_hash, (x) => {
        if(x){
            db.run(updateUserSQL, [username, p_hash, username, old_p_hash], (err, row) => {
                if(err){
                    return eventHandler(false);
                }
                else{
                    return authenticateUser(username, p_hash, eventHandler);
                }
        });
        }
        else{
            return eventHandler(false);
        }
    });
}

function authenticateUser(username, p_hash, eventHandler){
    db.get(getUserAuthSQL, [username, p_hash], (err, row) => {
        if(err){
            eventHandler(false);
        }
        else{
            eventHandler(row != null);
        }
    });
}





//This is how public methods are defined in Node.js
exports.connect = connect;
exports.saveRecipe = saveRecipe;
exports.openRecipe = openRecipe;
exports.deleteRecipe = deleteRecipe;
exports.authenticateUser = authenticateUser;
exports.addUser = addUser;
exports.updateUser = updateUser;