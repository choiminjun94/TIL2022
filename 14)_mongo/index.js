const express = require('express'); 
const app = express();
const port = 6000;
// bodyParser 가져오기
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key')
// 유저 가져오기
const {User} = require('./models/User')
const mongoose = require('mongoose')

//bodyParser 옵션 주기
// 
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI, {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('몽고 DB 연결중'))
.catch(err => console.log(err))


app.get('/', (req, res)=>res.send('Hello World'));

//회원가입 
app.post('/register', (req, res) =>{
    // 회원가입 할때 필요한 정보들을 Client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)
    // 비밀번호 암호화
    

    //유저 정보들을 저장 
    user.save((err, userinfo)=>{
        if(err) return res.json({
            success: false,err
        })
        return res.status(200).json({
            success: true
        })
    })  
})
app.post('/login', (rer, res) =>{
    
})    

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))