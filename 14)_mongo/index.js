const express= require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://test:0000@cluster0-amulf.mongodb.net/STUDY?retryWrites=true&w=majority', {
  // useNewUrlParser: true, 
  // useUnifiedTopology: true, 
  // useCreateIndex: true, 
  // useFindAndModify: false,
}).then(()=>console.log('connect')).catch(err=>console.log(err))

app.get('/', (req, res)=> res.send('hello'))

app.listen(port, ()=>console.log(`express app ${port}!`));