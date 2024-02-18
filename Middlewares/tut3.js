const express = require('express');
const app = express();
const port = 3001;

let numberOfrequests = 0;

function calculateRequests(req, res, next){
    numberOfrequests++;
    console.log(numberOfrequests);
    next();
}

app.use(calculateRequests);

app.get("/kidneyChekup", function(req, res){
    res.json({
        numberOfrequests,
        msg: "your kidney is healthy"
    });
});

app.get("/heartChekup", function(req, res){
    res.json({
        numberOfrequests,
        msg: "your heart is healthy"
    });
});

app.listen(port);

