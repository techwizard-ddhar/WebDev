//How many request hit your server

const express = require('express');
const app = express();
const port = 3001;

let numberOfrequests = 0;

function calculateRequests(req, res, next){
    numberOfrequests++;
    console.log(numberOfrequests);
    next();
}

app.get("/kidneyChekup", calculateRequests,  function(req, res){
    res.json({
        msg: "your kidney is healthy"
    });
});

app.get("/heartChekup", calculateRequests, function(req, res){
    res.json({
        msg: "your heart is healthy"
    });
});

app.listen(port);

