app.post('/api/users/login', (req, res) => {

    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
   
   User.findOne({ email: req.body.email }, (err, user) => {
   
    // console.log('user', user)
   
   if (!user) {
   
   return res.json({
   
   loginSuccess: false,
   
   message: "제공된 이메일에 해당하는 유저가 없습니다."
   
   })
   
   }
   
    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
   
   user.comparePassword(req.body.password, (err, isMatch) => {
   
    // console.log('err',err)
   
    // console.log('isMatch',isMatch)
   
   if (!isMatch)
   
   return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
   
    //비밀번호 까지 맞다면 토큰을 생성하기.
   
   user.generateToken((err, user) => {
   
   if (err) return res.status(400).send(err);
   
    // 토큰을 저장한다. 어디에 ? 쿠키 , 로컳스토리지 
   
   res.cookie("x_auth", user.token)
   
   .status(200)
   
   .json({ loginSuccess: true, userId: user._id })
   
   })
   
   })
   
   })
   
   })
   