//in memeory data
var users = [{
    name: "Debanjan",
    kidneys: [{
        healthy: false
    }]
}];

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    const johnkidneys = users[0].kidneys;

    const numberOfkidney = johnkidneys.length;

    let numberOfHealthykidney = 0;

    for(let i = 0; i < numberOfkidney; i++){

        if(johnkidneys[i].healthy){

            numberOfHealthykidney += 1;
        }
    }
    const numberOfUnhealthykidney = numberOfkidney - numberOfHealthykidney;

    res.json({
        numberOfkidney,
        numberOfHealthykidney,
        numberOfUnhealthykidney
    })
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/", function(req, res){

    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy: true
    })

    res.send("Done!!")
})

//replace unhealthy kidneys to healthy kidneys
app.put("/", function(req, res){
    if(checkUnhealthy()){
        for(let i = 0; i < users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg: "update done!!"
        })
    }
    else{
        res.status(411).json({
            msg: "No unhealthy kidneys"
        });
    }
});

app.delete("/", function(req, res){

    if(checkUnhealthy()){
        const healthykidney = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy == true){
                healthykidney.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = healthykidney;

        res.json({
            msg: "unhealthy kidney is removed"
        })
    }
    else
    {
        res.status(411).json({
            msg: "Something went wrong."
        });
    } 
});

function checkUnhealthy(){
    let atleastOneUnhealthy = false;
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy == false){
            atleastOneUnhealthy = true;
            break;
        }
    }
    return atleastOneUnhealthy;
}

app.listen(port);