const mongoose = require('mongoose');
const { DB_ENDPOINT } = require('../utils/constants');

const connectDB = async () => {
    await mongoose.connect(DB_ENDPOINT);
}

connectDB().
    then(() => {
        console.log("DB connection established.");
    }).catch((err) => {
        console.log("DB connection cannot be established.", err);
    });