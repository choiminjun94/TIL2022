const express = require('express');
const app = express()
const port = 3030

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Node_mongo:0000@cluster0.x2gk0g9.mongodb.net/?retryWrites=true&w=majority',{
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('몽고 DB 연결중'))
.catch(err => console.log(err))



app.get('/', (req,res) => res.send('화면 실험'))
app.listen(port, () => console.log(`현재 포트번호 ${port} 입니다.`));