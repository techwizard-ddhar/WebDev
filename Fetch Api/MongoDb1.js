const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:MMpnztDspX4mQo7Y@cluster05.nnhyc7s.mongodb.net/User_Info");

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String
});

const users = mongoose.model('users', usersSchema);

const userData = [
    {
        username: "debanjandhar45@gmail.com",
        password: "CQLDZdoh300",
        name: "Debanjan"
    },
    {
        username: "rishiraj@gmail.com",
        password: "qwerty300",
        name: "Rishi"
    },
    {
        username: "joel@gmail.com",
        password: "samuel123",
        name: "Joel"
    }
];

users.insertMany(userData);
 