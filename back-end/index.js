const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database=require('./database');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', function(req, res) {
	res.send("Hello from server")
})
app.post("/adddetails",function(req,res){
    const val=req.body;
    const querry=`INSERT INTO neoproject.userdetails(name,email,num,date1,location,gender,address) VALUES(?,?,?,?,?,?,?)`;
    database.query(querry,[val[0],val[1],val[2],val[3],val[4],val[5],val[6]],function(err,rows){
        if(err)
        throw err
        
    })
})
app.post("/deldetails/doit",(req,res)=>{
    const k=req.body[0];
    const querry=`DELETE FROM neoproject.userdetails WHERE id=?`
    database.query(querry,[k],function(err,rows){
        if(err)
        throw err
        else
        res.send(rows)
    })
})
app.get("/getdetails",(req,res)=>{
    const querry=`SELECT * FROM neoproject.userdetails`;
    database.query(querry,function(err,rows){
        if(err)
        throw err
        else{
            res.send(rows)
        }
    })
    
})
app.post("/byname",(req,res)=>{
    const name=req.body[0]
    console.log(name);
    const querry=`SELECT * FROM neoproject.userdetails WHERE name LIKE ?`
    database.query(querry,[name+"%"],(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/bygen",(req,res)=>{
    const name=req.body[0]
    const querry=`SELECT * FROM neoproject.userdetails WHERE gender LIKE ?`
    database.query(querry,[name+"%"],(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byemail",(req,res)=>{
    const name=req.body[0]
    const querry=`SELECT * FROM neoproject.userdetails WHERE email LIKE ?`
    database.query(querry,[name+"%"],(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byphno",(req,res)=>{
    const name=req.body[0]
    console.log(name);
    const querry=`SELECT * FROM neoproject.userdetails WHERE num LIKE ?`
    database.query(querry,[name+"%"],(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/bydobf",(req,res)=>{
    const name=req.body[0]
    const querry=`SELECT * FROM neoproject.userdetails WHERE date1 LIKE ?`
    database.query(querry,[name+"%"],(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byaddress/find",(req,res)=>{
    const name=req.body[0]
    const querry=`SELECT * FROM neoproject.userdetails WHERE address LIKE`
    database.query(querry,[name+"%"],(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/byloc",(req,res)=>{
    const name=req.body[0]
    const querry=`SELECT * FROM neoproject.userdetails WHERE location LIKE`
    database.query(querry,[name+"%"],(err,rows)=>{
        if(err)
        throw err;
        else
        res.send(rows);
    })
})
app.post("/searchdetails",(req,res)=>{
    const querry=`SELECT * FROM neoproject.userdetails WHERE id=?`;
    database.query(querry,[req.body[0]],function(err,rows){
        if(err)
        throw err
        else{
            res.send(rows)
        }
    })
    
})
app.post("/updatedetails",(req,res)=>{
    const val=req.body;
    const querry=`UPDATE neoproject.userdetails SET name=?,email=?,num=?,date1=?,location=?,gender=?,address=? WHERE id=?`;
    database.query(querry,[val[0],val[1],val[2],val[3],val[4],val[5],val[6],val[7]],function(err,rows){
        if(err)
        throw err
        
    })
})
app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
  })