const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Log All HTTP Requests
const path = require('path');
require('dotenv/config'); // ENV Connection
const routes = require('./routes/api');
const cors = require('cors') // Avoid CORS blocking policy


const app = express();
app.use(cors()); // Avoid CORS policy

const PORT = 8080;

//  Connect mongo DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true,useUnifiedTopology: true },
    ()=>{
        console.log('DB connected')
    })


app.use(morgan('tiny')); // Log HTTP request
app.use('/api',routes);



app.listen(PORT , console.log(`Sever listening at ${PORT}`));