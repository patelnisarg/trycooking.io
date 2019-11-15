const fs = require('fs');
const sqlite3 = require('sqlite3');

const database_path = './database.sqlite'

var db;

function connect() {
    initializationSQL = fs.readFileSync('./CREATE_DATABASE.SQL', 'utf8');

    db = new sqlite3.Database(database_path, (err) => 
    {
        if (err){ 
            console.log(err.message);
        }
        
        initializationSQL.split(';').forEach(element => {
            if(element != '')
            db.run(element + ';');
        });

        console.log('DB Ready');
    });
};

exports.connect = connect;