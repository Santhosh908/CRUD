const mqsql=require('mysql');
 var connection=mqsql.createConnection({
    host:"localhost",
    database:"neoproject",
    user:"root",
    password:"yourpassword"
 });
 connection.connect(function(error){
    if(error){
        throw error
    }
    else{
        console.log("db connected successfully")
    }
 });
 module.exports=connection;