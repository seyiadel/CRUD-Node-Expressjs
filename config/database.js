const mongoose = require('mongoose')
require('dotenv').config()

class Database {

    constructor() {
        this._connect();
    }
   
    _connect(){
        mongoose.connect(process.env.DATABASE_URI).then(() => {
            console.log('Database connected SUCCESSFUL');
        }).catch((error) => {
            console.error('Database connecting FAILED')
            console.log(error)
        });
    }
}

module.exports = new Database();