const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    if(err){
        console.log(err)
    }
    else
    {
        let string = data;
        let string1 = "";
        let prevChar = "";

        for(let i = 0; i < string.length; i++)
        {
            if(string[i] != " ")
            {
                string1 += string[i];
            } 
            else if (prevChar != " ")
            {
                string1 += " ";
            }
            prevChar = string[i];
        }

        fs.writeFile("a.txt", string1, function(err){
            if(err) {
                console.error(err);
            } else {
                console.log("file written successfully");
            }
        });
    }
});