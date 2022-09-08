## Express 설정 
> npm install express -save
> index.js 파일 내역 

``` js
const express = require('express'); 
const app = express();
const port = 3000;

app.get('/', (req, res)=>res.send('Hello World'));
app.listen(port,() => console.log(`listen port ${port}`));

```
> package.json 수정

>express 버전 수정 X

``` json
{
  "name": "login-study02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

> 결과
![image](https://user-images.githubusercontent.com/60457431/187343165-9be63479-dcfb-406d-8bd5-c85596fee832.png)

##  Mongo 연결 
<br>

> npm install mongoose --save

``` js
const express = require('express'); 
const app = express();
const port = 3000;

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minjun:0000@cluster0.ep8wgk5.mongodb.net/?retryWrites=true&w=majority', {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('몽고 DB 연결중'))
.catch(err => console.log(err))


app.get('/', (req, res)=>res.send('Hello World'));
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))

```
![image](https://user-images.githubusercontent.com/60457431/187564905-9877e61b-ce3f-4583-9916-4a96b00261d2.png)


## 스키마 작성

> User.js 생성

![image](https://user-images.githubusercontent.com/60457431/187564965-1d1be235-1cbe-4bbf-b774-1f22e1e99152.png)


``` js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name :{
    type : String,
    maxlength : 50
  },
  email:{
     type: String,
     // 공백 제거
     trim: true,
     //유일값
     unique: 1
  },
  password:{
    type: String,
    minlength: 5
  },
  lastname:{
    type: String,
    maxlength : 50
  },
  // 관리자 및 일반유저 구분
  role:{
    type : Number,
    default: 0
  },
  image: String,
  token: {
    type : String
  },
  // 유효성 관리
  token: { 
    type : String
  },
  // 유효기간
  tokenExp:{
    type : Number
  }
})

const User = mongoose.model('User', userSchema)

//유저 모델을 다른 곳에서도 사용하기 위해 exports 하기
module.exports = {User}

```

## index.js 수정

> body-parser 인스톨 

> npm install body-parser --save 

``` js
const express = require('express'); 
const app = express();
const port = 3000;
// bodyParser 가져오기
const bodyParser = require('body-parser');
// 유저 가져오기
const {User} = require('./models/User')

//bodyParser 옵션 주기
// 
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minjun:0000@cluster0.ep8wgk5.mongodb.net/?retryWrites=true&w=majority', {
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('몽고 DB 연결중'))
.catch(err => console.log(err))


app.get('/', (req, res)=>res.send('Hello World'));

//회원가입 
app.post('/register', (req, res) =>{
    // 회원가입 할때 필요한 정보들을 Client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)
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

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))

```

## postman 설치 및 테스트 

url : https://www.postman.com/

![image](https://user-images.githubusercontent.com/60457431/187565022-7c183e26-dc53-4008-9b72-700115613b72.png)

## nodemon install 

> npm install nodemon --save

## package.json 수정

> start를 수정

``` json 
{
  "name": "login-study02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mongoose": "^6.5.3",
    "nodemon": "^2.0.19"
  }
}


```
aaafdf

