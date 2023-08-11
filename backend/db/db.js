const mangoose = require('mongoose')

const db=async()=>{
    try{
        mangoose.set('strictQuery',false)
        await mangoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    }
    catch (error){
        console.log('db connected error')
    }
}

module.exports={db}