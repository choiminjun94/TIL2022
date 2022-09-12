const express = require('express');
const app = express()
const port = 3030

app.get('/', (req,res) => res.send('화면 실험'))
app.listen(port, () => console.log(`현재 포트번호 ${port} 입니다.`));