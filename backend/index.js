const express = require('express')
const cors = require('cors')
const index= express()
const {db}=require('./db/db');
const {readdirSync}=require('fs')

require('dotenv').config()

const PORT= process.env.PORT
//middle ware

index.use(express.json())
index.use(cors())

//routes

readdirSync('./routes').map((route)=>index.use('/api/v1',require('./routes/'+route)))





const server=()=>{
    db()
    index.listen(PORT,()=>{
    console.log('you are listening the port:',PORT);
})
}
server()

