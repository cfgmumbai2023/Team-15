require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.set('debug', true);
const mongooseOptions = {
    autoIndex: false
};

mongoose.connect(process.env.MONGO_DB_URI, mongooseOptions);
const db = mongoose.connection;

db.on('error', err => {
    console.error('Mongoose error', err);
});

db.once('open', async () => {
    const apiRoutes = require('./routes');
    const app = express();

    app.use('/api', apiRoutes(app));
    app.listen(8080, err => {
        if (err) throw err;
        console.log('Server listen on port ', 8080);
    });
});