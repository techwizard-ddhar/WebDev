const mongoose = require("mongoose")

//mongodb+srv://admin:MMpnztDspX4mQo7Y@cluster05.nnhyc7s.mongodb.net/

mongoose.connect("mongodb+srv://admin:MMpnztDspX4mQo7Y@cluster05.nnhyc7s.mongodb.net/User_Data");

const users = mongoose.model('users', {name: String, email: String, password: String});

const user = new users({
    name: "Debanjan",
    email: "debanjandhar45@gmail.com",
    password: "CQLDzoh100"
});

user.save();