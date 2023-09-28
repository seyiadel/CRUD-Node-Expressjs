const express = require('express');
const app = express();
const crudRoutes = require('./routes/person')
const database = require('./config/database')

app.use(express.json())

// Enable Routes from the main start page(server.js)
app.use(crudRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}....`)
})

