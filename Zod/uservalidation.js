const express = require("express")
const zod = require("zod");
const app = express();
const port = 5000;

function validate(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6)
    });

    const response = schema.safeParse(obj);
    console.log(response);
    return response;
}


app.use(express.json());

app.post("/healthChekup", function(req,res){
    const response = validate(req.body);
    if(!response.success){
        res.status(500).json({
            msg: "wrong input"
        })
    }
    else{
        res.send({
            response
        })
    }

});

app.listen(port);