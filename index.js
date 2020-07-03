const express =require('express');
const app = express();
const bodyParser = require("body-parser");
const path= require('path');

app.use(bodyParser.urlencoded({ extended: false}));


app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post ('/Enrollments',function (req,res) {

const sql = require("mssql");

const config = {
    user:'applicationuser',
    password:'bazinga!',
    server:'localhost',
    database:'rahmani' ,
port: 1433 };

sql.connect(config, function (err) {

   if (err) console.log(err);
   
   let sqlRequest= new sql.Request();

   let LockBoxId=req.body.LockBoxId;
   console.log(LockBoxId);

let sqlQuery='select BillingEnrollmentId,iEthicalId,FirstName,LastName,PortfolioName,DateCreated from Enrollments where LockBoxId='+ parseInt(LockBoxId);

sqlRequest.query(sqlQuery, function(err, data) { 

    if (err) console.log(err)


    let h='<h1 style="background:black:colar:whitesmoke:margin:20px; border:20px solid white;"> Query Enrollment Results<h1>'
    let str='<table style="margin-left:20px;">';
    let row='';
    for (let j=0;j<data.recordset.length;j++){
         row=row + '<tr>' + '<td style="width:150px;">' +  data.recordset[j].iEthicalId +'</td>'+ '<td style="width:150px;">' + data.recordset[j].FirstName +' '+data.recordset[j].LastName +'<td>'+ data.recordset[j].PortfolioName +'<td>'+data.recordset[j].DateCreated+'</td>'  
         }
    str=str + row + '</table>';
    res.send(h + str);

   console.log(data);
    console.log(data.recordset);
    console.log(data.rowsAffected);
    console.log(data.recordset[0]);
 //res.send(data);
sql.close();
   });
});
});


const webserver =app.listen(2000, function () {
    console.log('Node Web Server is running...');
});
