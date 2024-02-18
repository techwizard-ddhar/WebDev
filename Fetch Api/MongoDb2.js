const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;
app.use(express.json());

//mongodb+srv://admin:MMpnztDspX4mQo7Y@cluster05.nnhyc7s.mongodb.net/

mongoose.connect("mongodb+srv://admin:MMpnztDspX4mQo7Y@cluster05.nnhyc7s.mongodb.net/User_Data");

const users = mongoose.model('users', {name: String, email: String, password: String});

app.post("/signup", async function(req, res){
    const username = req.body.username; // username --> email
    const name = req.body.name;
    const password = req.body.password;

    const existingUser = await users.findOne({email: username});
    if(existingUser){
        res.status(400).send("username already exists");
    }
    else{
        const user = new users({
            name: name,
            email: username,
            password: password
        });

        user.save();
        res.json({
            msg: "user created successfully"
        });
    }
});

app.listen(port);


