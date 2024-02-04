const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000
app.use(bodyParser.json());

app.post("/dhar", function(req, res){
    
    const message = req.body.message;
    console.log(message);
    res.send({
        output: " 2 + 2 = 4"
    });
});
app.get("/", function(req, res){
    res.send("Hii there !!, hello-2 ...");
});

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});