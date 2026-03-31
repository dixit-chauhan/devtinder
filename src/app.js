const express = require('express');
const { connectDB } = require('./config/database');
const User = require('./models/User');

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    const { firstName, lastName, emailId, password } = req.body;
    // creating a new instance of User Model
    const user = new User({
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        password: password
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