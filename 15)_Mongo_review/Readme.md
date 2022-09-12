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
![image](https://user-images.githubusercontent.com/60457431/189676391-656dd883-588a-4c92-9e7c-dc10d3682b37.png)
