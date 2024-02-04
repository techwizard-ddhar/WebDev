const express = require("express");
const app = express();
const port = 3000;

function CalculateSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

app.get("/", function(req, res){
    //throw new Error("Server down");
    const range = req.query.range;
    const sum = CalculateSum(range);
    res.send(sum.toString());
});

app.listen(port);