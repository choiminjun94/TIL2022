<<<<<<< HEAD
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
=======
const express = require('express'); 
const app = express();
const port = 5000;
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minjun:0000@cluster0.ep8wgk5.mongodb.net/?retryWrites=true&w=majority', {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('몽고 DB 연결중'))
.catch(err => console.log(err))


app.get('/', (req, res)=>res.send('Hello World'));
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))
>>>>>>> 029c7bc20c3ddfdb312ec48f64826d7f66516d91
