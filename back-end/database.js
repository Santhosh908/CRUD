const mqsql=require('mysql');
const pass="santhosh@2003";
 const connection=mqsql.createConnection({
    host:"localhost",
    database:"neoproject",
    user:"root",
    password:pass
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