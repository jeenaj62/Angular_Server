const express = require('express')
const dataservice = require('./services/data.service.js')
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(401).send("GET STARTED")
})
app.post('/',(req,res)=>{
    res.send("POST STARTED")
})
app.put('/',(req,res)=>{
    res.send("PUT STARTED")
})
app.patch('/',(req,res)=>{
    res.send("PATCH STARTED")
})
app.delete('/',(req,res)=>{
    res.send("DELETE STARTED")
})
app.post('/register',(req,res)=>{
    console.log(req.body);
   const result= dataservice.register(req.body.acno,req.body.uname,req.body.password)
   res.status(result.statusCode).json(result)
})
app.post('/login',(req,res)=>{
    console.log(req.body);
   const result= dataservice.login(req.body.acno,req.body.pswd)
    res.status(result.statusCode).json(result)
})
app.post('/deposit',(req,res)=>{
    console.log(req.body);
    const result= dataservice.deposit(req.body.acno,req.body.pswd,req.body.amt)
     res.status(result.statusCode).json(result)
 })
 app.post('/withdraw',(req,res)=>{
    console.log(req.body);
    const result= dataservice.withdraw(req.body.acno,req.body.pswd,req.body.amt)
     res.status(result.statusCode).json(result)
 })
app.listen(3000,()=>{
    console.log("Server started at port number:3000");   
})
