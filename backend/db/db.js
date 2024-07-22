const mongoose = require('mongoose')

const db = async()=>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB connected')
    }catch(err){
        console.log('DB connection failed')
    }
}

module.exports = {db}