const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post("/kidneyChekup", function(req, res) {

    const kidney = req.body.kidney;
    const kidneylength = kidney.length;

    res.send("you have " + kidneylength + " kidneys");
  });

//global catches
//ERROR-Handling Middleware
app.use(function(err, req, res, next){
    res.status(500).json({
        ERROR: "server down"
    });
});
  
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
