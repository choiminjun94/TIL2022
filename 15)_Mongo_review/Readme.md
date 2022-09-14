# 0912
## node 설치 확인
![image](https://user-images.githubusercontent.com/60457431/189651517-16bfe7b8-6cac-4ffc-9eb7-f80116cbcda9.png)


<br/>

## express install  

>  npm install express --save 

<br/>

## JSON 수정
``` json 

{
  "name": "Mongo_review",
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
## index.js 

``` js

const express = require('express');
const app = express()
const port = 3030

app.get('/', (req,res) => res.send('화면 실험'))
app.listen(port, () => console.log(`현재 포트번호 ${port} 입니다.`));

```
![image](https://user-images.githubusercontent.com/60457431/189651644-5912a9ca-3f6f-44b9-a524-d16fa0445d60.png)

## Mongo 설치 및 연결 확인
## Mongo install  

>  npm install mongoose --save 

## Mongo 연결 

``` JS 
const express = require('express');
const app = express()
const port = 3030

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Node_mongo:0000@cluster0.x2gk0g9.mongodb.net/?retryWrites=true&w=majority',{
    //  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('몽고 DB 연결 성공 했습니다.'))
.catch(err => console.log(err))



app.get('/', (req,res) => res.send('화면 실험'))
app.listen(port, () => console.log(`현재 포트번호 ${port} 입니다.`));

```

# 0913
## 회원가입

## bady-parser 및 mongoose 설치 
> npm install bady-parser --save

> npm install mongoose --save  

### bady-parser 의 역할 

body-parser는 미들웨어이다. 즉, 요청(request)과 응답(response) 사이에서 공통적인 기능을 수행하는 소프트웨어이다. 그렇다면 역할은 무엇일까? 바로 요청의 본문을 지정한 형태로 파싱해주는 미들웨어이다

<br/>

```js 

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

app.listen(port, () => console.log(`현재 포트번호 ${port} 입니다.`));


```