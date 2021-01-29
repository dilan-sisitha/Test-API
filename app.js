require("dotenv").config();
const { query } = require("express");
const express = require("express");


//db

var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'trains'
});
 
db.connect((err)=>{
    if(err){
        console.log('db error');
    }else
    console.log('my sql connceted');
});

const app = express();


app.get("/getshedule/:refno",(req,res)=>{
let sql = `SELECT * FROM shedule WHERE refno= ${req.params.refno}`;
let query = db.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
    //console.log(result);
    res.send(result);
    }
})

});

app.get("/checkreno/:refno",(req,res)=>{
    let sql = `SELECT * FROM shedule WHERE refno= ${req.params.refno}`;
    let query = db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }else{
        //console.log(result);
        res.send(result);
        }
    })
    
    });


app.get("/api",(req,res)=>{
    res.json ({
        message :"working!!!"
    });

});

app.listen(process.env.APP_PORT,()=>{
    console.log("server started",process.env.APP_PORT);
}); 