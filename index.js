const dbConnect=require('./mongodb')
const express=require('express')
const app=express()
app.use(express.json())

app.post('/',async(req,res)=>{
    let data=await dbConnect();
    let result=await data.insertOne(req.body)
    console.log(result)
    res.send(result)
    
})
app.listen(5000)