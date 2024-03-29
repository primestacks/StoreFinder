const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors'); 
const connectDb = require('./config/db');

// Loading global variables
dotenv.config({path: './config/config.env'});
// connected to database from config
connectDb()
// Initializing express()
const app = express();
// Body parser
app.use(express.json())
// Enable cors
app.use(cors())

// serving static files
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/api/v1/stores', require('./routes/stores'))
// app.use('/api/v1/about', require('./routes/stores'))
// initiazing port and listening on port

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`))