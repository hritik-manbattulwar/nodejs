const mysql= require('mysql2')

const conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"9997",
    database: 'codeheist'
})
conn.connect((err)=>{
    if(err) throw err;
})
module.exports=conn;