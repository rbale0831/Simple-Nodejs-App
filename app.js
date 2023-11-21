const express = require('express')
const app = express();

app.get('/', function (req,res){
    res.send('Hello World from AWS Fargate!');
});

app.listen(80, function (){
    console.log('App listening on port 4957!');
});