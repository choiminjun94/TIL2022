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
