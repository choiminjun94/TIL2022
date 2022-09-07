const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken')

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

// 유저 정보를 저장하기 전에 작업
userSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
      //비밀번호를 암호화 시킨다.
      bcrypt.genSalt(saltRounds, function (err, salt) {
          if (err) return next(err)

          bcrypt.hash(user.password, salt, function (err, hash) {
              if (err) return next(err)
              user.password = hash
              next()
          })
      })
  } else {
      next()
  }
})
userSchema.methods.comparePassword = function (plainPassword, cb) {

  //plainPassword 1234567    암호회된 비밀번호 $2b$10$l492vQ0M4s9YUBfwYkkaZOgWHExahjWC
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  })
}

userSchema.methods.generateToken = function (cb) {
  var user = this;
  // console.log('user._id', user._id)

  // jsonwebtoken을 이용해서 token을 생성하기 
  var token = jwt.sign(user._id.toHexString(), 'secretToken')
  // user._id + 'secretToken' = token 
  // -> 
  // 'secretToken' -> user._id

  user.token = token
  user.save(function (err, user) {
      if (err) return cb(err)
      cb(null, user)
  })
}

const User = mongoose.model('User', userSchema)

//유저 모델을 다른 곳에서도 사용하기 위해 exports 하기
module.exports = {User}