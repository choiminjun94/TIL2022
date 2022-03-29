# 0326 JS Login
### <span style="color:pink">HTML 전체 소스 </span>
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div id="login-form">
        <input type="text" placeholder="what is your name">
        <button>Login</button>
    </div>
    <script src="app.js"></script>
</body>
</html>

```
> 여기에는 input과 button을 id="login-form에 감싸 주었다. 

### <span style="color:pink">JS 전체 소스 </span>
<br>
```
const loginForm = document.getElementById("login-form");

// input과 button을 끌어오기
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

```
> 여기서 하는 것은 
먼저 HTML에서 form을 값는다. document.getElementById 이용해서 <br>
찾은 form을 변수 loginForm에 저장 한다.<br> 
좀더 설명하면 loginform은 HTML 내에 있는 element라는 뜻이다. <br>
코드로는 하기 부분이다. <br>

```
  <div id="login-form">
        <input type="text" placeholder="what is your name">
        <button>Login</button>
 </div>

```
> 그 다음은 input과 button을 찾는 일이다. <br>
input과 button은 loginForm에 감싸져 있기에 document가 아닌 loginForm에서 찾을수 있다.<br>
코드로는 하기 부분이다. 

```
const loginForm = document.getElementById("login-form");

// input과 button을 끌어오기
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

```
> form부분을 따로 입력 하지 않고 한번에 찾는 방법도 존재 한다. 
```
// 또다른 표현 
const loginInput1 = loginForm.querySelector("#login-form input");
const loginButton2 = loginForm.querySelector("#login-form button");

```





