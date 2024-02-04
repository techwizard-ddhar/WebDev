const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/files', function(req, res){
  fs.readdir(__dirname, function(err, files){
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.json(files)
    }
  });
});

app.get('/file/:filename', function (req, res) {
  const filepath = path.join(__dirname, req.params.filename);

  fs.readFile(filepath, 'utf8', function(err, data){

  if (err) {
      res.status(404).send('File not found');
  }
  res.send(data);
  });

});


app.all('*', function(req, res){
  res.status(404).send('Route not found');
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

