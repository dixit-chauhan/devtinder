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

app.get('/user', async (req, res) => {
    const emailId = req.body.emailId;
    try {
        const user = await User.findOne({ emailId: emailId });
        if (!user) {
            res.status(404).send("User not found.");
        } else {
            res.send(user);
        }

    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});

app.delete('/user', async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.send("User deleted successfully.");
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});

app.patch('/user', async (req, res) => {
    const data = req.body;
    const userId = req.body.userId;
    try {
        await User.findByIdAndUpdate(userId, data);
        res.send("User updated successfully.");
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});


app.get('/feed', async (req, res) => {
    try {
        const users = await User.find();
        if (!users.length) {
            res.status(404).send("No record found.");
        } else {
            res.send(users);
        }
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
})

connectDB().
    then(() => {
        console.log("DB connection established...");
        app.listen(7777, () => {
            console.log("Server is listening on port 7777...");
        });
    }).catch((err) => {
        console.log("DB connection cannot be established.", err);
    });