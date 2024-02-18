const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    if(err) {
        console.error(err);
    } else {
        fs.writeFile("b.txt", data, function(err){
            if(err) {
                console.error(err);
            } else {
                console.log("file written successfully");
            }
        });
    }
});

// we cannot write write function right after read function, because it is async function
//which will get exceuted after some time(web-apis)
//Therefore put the write function inside read function