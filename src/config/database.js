const mongoose = require('mongoose');
const { DB_ENDPOINT } = require('../utils/constants');

const connectDB = async () => {
    await mongoose.connect(DB_ENDPOINT);
}

module.exports = { connectDB };