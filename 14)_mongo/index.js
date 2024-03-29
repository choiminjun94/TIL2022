const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');

const { auth } = require("./middleware/auth");
const { User } = require("./models/User");
// 새로운 스카마 가져옴
const {Stoke}  = require("./models/Stoke")
const mongoose = require('mongoose');

//application/x-www-form-urlencoded 이런식으로 된 데이터를 가져와서 분석해주는 코드
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 으로된 데이터를 가져와서 분석할수있게 하는 코드
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/users/register', (req, res) =>{
    //회원가입 할때 필요한 정보들을 Clinent 에서 가져오면
    //그것들을 데이터베이스에 넣어준다 

    const user = new User(req.body);

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/api/users/stoke', (req, res) =>{
    //회원가입 할때 필요한 정보들을 Clinent 에서 가져오면
    //그것들을 데이터베이스에 넣어준다 

    const stoke = new Stoke(req.body);

    stoke.save((err, stokeInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/api/users/login', (req, res) => {
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            }) 
        }
    // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    //User.js에서 comparePassword 메소드를 만들어서 사용하면됨
    user.comparePassword(req.body.password , (err, isMatch) => {
        if(!isMatch){
            return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})
        }
        // 비밀번호까지 맞다면 토큰을 생성하기
        user.generateToken((err, user) => {
            //jsonwebtoken을 이용해서 token을 생성하기
            if(err) return res.status(400).send(err);

            //토큰을 저장한다 -> 어디에? 오늘은 쿠키에 저장해보자
            res.cookie('x_auth', user.token).status(200).json({loginSuccess: true, userId: user._id})
        })
    })
    })
})
app.get('/api/users/auth', auth, (req, res) =>{
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false:true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/logout',auth,  (req, res) =>{
    User.findOneAndUpdate({_id: req.user._id},
        { token: ""}
        , (err, user) =>{
            if(err) return res.json({success: false, err});
            return res.status(200).send({
                success: true
            })
        }    
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })