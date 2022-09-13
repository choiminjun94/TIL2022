const express = require('express');
const app = express()
const port = 3030
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//유저 정보를 가져오기
const  { User } = require('./Models/User')
// 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Node_mongo:0000@cluster0.x2gk0g9.mongodb.net/?retryWrites=true&w=majority',{
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('몽고 DB 연결 성공 했습니다.'))
.catch(err => console.log(err))


// Route
app.get('/', (req,res) => res.send('화면 실험'))

//회원가입
app.post('/register', (req, res) =>{
    // 회원가입 할때 필요한 정보를 Client에서 가져오면
    // 그것들을 DB에 넣어준다. 

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({success:false,err})
        return res.status(200).json({
            success: true
        })
    })
})

// app.post('/register', (req, res) =>{
//     //회원가입 할때 필요한 정보들을 Clinent 에서 가져오면
//     //그것들을 데이터베이스에 넣어준다 

//     const user = new User(req.body);

//     user.save((err, userInfo) => {
//         if (err) return res.json({ success: false, err })
//         return res.status(200).json({
//             success: true
//         })
//     })
// })

app.listen(port, () => console.log(`현재 포트번호 ${port} 입니다.`));

