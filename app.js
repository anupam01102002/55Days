const express = require('express');

const bodyParser=require('body-parser');

const moment=require('moment');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname +'/public'));

app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/index.html');
    
});

app.post('/',(req,res)=>{
    console.log(req.body);
    var currentday=req.body.currentday;

    console.log(currentday);

    var day55=moment().add(55,'d').format('DD/MM/YYYY');
    console.log(day55);
    res.send('date after 55 days = '+ day55);
});
app.listen(3000,function(){
    console.log("successfully started at port 3000");
})
