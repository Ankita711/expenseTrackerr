const express = require('express')
const cors = require('cors')
const {db} = require('./db/db')
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

app.use(express.json())
app.use(cors())

 readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))
// app.use('/api/v1',require('./routes/register'));

const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send('Hello World')
})
const server = ()=>{
    db()
    app.listen(PORT,()=>{
        console.log('You are listening to port: ',PORT)
    })
}
server()