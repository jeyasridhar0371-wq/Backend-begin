const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// var username = "john"
// var password = 123
let userList = [
    { username:"john",password:"123" },
    { username:"vijay",password:"456" }
]

app.post("/",(req,res)=>{
    var present=false
    userList.forEach(element => {
        if(req.body.username==element.username && req.body.password==element.password){
            present=true
        }
    });

    if(present==true){
        res.send(true)
    }
    else{
        res.send(false)
    }

    // if(req.body.username==username && req.body.password == password){
    //     res.send(true)
    // }
    // else{
    //     res.send(false)
    // }
})

app.post("/add",(req,res)=>{
    console.log(req.body)
    userList.push(req.body)
    console.log(userList)
    res.send("Success")
})

app.listen(5000,()=>{
    console.log("Server started...")
})