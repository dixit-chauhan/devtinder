const express = require('express');
const { connectDB } = require('./config/database');
const User = require('./models/User');

const app = express();

app.post('/signup', async (req, res) => {
    // creating a new instance of User Model
    const user = new User({
        firstName: "Virat",
        lastName: "Kohli",
        emailId: "virat.kohli@gmail.com",
        password: "kohli@1234"
    });
    try {
        await user.save();
        res.send("User created successfully.");
    } catch (err) {
        res.status(400).send("Error saving the user" + err.message);
    }
});

connectDB().
    then(() => {
        console.log("DB connection established...");
        app.listen(7777, () => {
            console.log("Server is listening on port 7777...");
        });
    }).catch((err) => {
        console.log("DB connection cannot be established.", err);
    });