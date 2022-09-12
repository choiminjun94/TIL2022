# 0912
## node 설치 확인
사진 추가 
<br/>
## express install  
###   npm install express --save 

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


