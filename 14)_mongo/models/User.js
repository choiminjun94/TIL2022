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