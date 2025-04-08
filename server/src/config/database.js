const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data/testDB.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the testDB database.');
});

module.exports = db;

