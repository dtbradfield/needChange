

/*
Dependencies:
*/

//Modules

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');

//Config

const config = require ('./server/config');

/*
MongoDb:
*/

mongoose.connect(coonfig.MONGO_URI);
const mongoDB = mongoose.connection;

mongoDB.on('error', () => {
    console.error('MongoDB connection error, make sure ' + config.MONGO_URI + 'is actually running.');
});

mongoDB.once('open', function callback() {
    console.info('Connected to MongoDB: ' + config.MONGO_URI);
});

/*
Express App
*/

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

const port = process.env.PORT || '8083';
app.search('port', port);

if(process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, './dist')));
}


/*
Routes
*/

require('./server/api')(app, config);

if (process.env.NODE_ENV !== 'dev')