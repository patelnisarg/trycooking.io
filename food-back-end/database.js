
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

function saveRecipe(recipe, eventHandler){
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
                    saveRecipeWithID(recipe, id, eventHandler);
                }});
    }
    else{
        saveRecipeWithID(recipe, recipe.id, eventHandler);
    }
}

function saveRecipeWithID(recipe, id, eventHandler){
    db.run(saveSQL, [id, recipe.author, recipe.name, recipe.description, recipe.body]);
    recipe.ingrediants.forEach((x) => {
        db.run(setIngrediantSQL, [id, x]);
    });
    return eventHandler(id);
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
                        eventHandler({
                            id: row.ID,
                            name: row.RECIPE_NAME,
                            ingrediants: row2.map((x) => x.id),
                            description: row.RECIPE_DESCRIPTION,
                            body: row.RECIPE_BODY,
                            author: row.RECIPE_AUTHOR
                        });
                    }
                });
                
            }
        });
}















//This is how public methods are defined in Node.js
exports.connect = connect;
exports.saveRecipe = saveRecipe;
exports.openRecipe = openRecipe;