# Mometam 제작

### 0326 JS Login
## <span style="color:pink">HTML 전체 소스 </span>
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

## <span style="color:pink">JS 전체 소스 </span>

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

## 버튼 클릭 JS 
> 버튼을 클릭 했을때 다른 기능을 추가하고 싶으면 JS에 입력하면 된다.<br> 
예를들면 아무값이 없거나 길이를 초과 했을때이다. <br>
그에 관련된 코드를 하기에 작성 하겠다. 

```

function onLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        alert("입력 해주세요");
        //.length는 문자열의 길이를 구하는것
    }else if(username.length > 15){
        alert("이름이 너무 깁니다.");
    }
}

loginButton.addEventListener("click", onLoginBtnClick)

```

> 이런식으로 작성하면 입력 된 값이 없거나 길이가 넘으면 경고 창이 발생 한다. <br>
하지만 이런것을 사실상 작성할 필요가 없다. HTML에서 전부 해주기 때문이다. <br>
그러기에 JS에 버튼 관련 코드를 전부 삭제 하고 여기에만 기록 하겠다. 

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
    <!-- input는 div가 아닌 form안에 있어야 한다. -->
    <!-- form 안에 input를 넣을 시 자동적으로 submit가 된다. -->
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="what is your name">
        <button>Login</button>
    </form>
    <script src="app.js"></script>
</body>
</html>

```
### 아까와 가장 큰 변경점은 form이 생긴 것이다. <br>
> input 값은 경우 form안에 넣어주어야 한다. 넣어주지 않아도 작동은 되지만 그렇지 않으면 input의 길이나 아무것도 넣지 않는 상황을 아까와 같이 전부 JS에 입력 해주어야 한다. <br>


## submit Event (preventDefault)
```
const loginForm = document.getElementById("login-form");

// input과 button을 끌어오기
const loginInput = loginForm.querySelector("input"); 
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit); 
```

위와 같이 작업을 하면 Submit Event는 작업이 된것을 확인 가능 하다. 
하지만 아직 못한게 있다면 새로고침 방지 이벤트 이다. 

```

function onLoginSubmit(evnet){
    
    evnet.preventDefault();
    console.log(loginInput.value);
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);

```
> function의 ()을 더하면 브라우저가 보자마자 자동으로 이 function을 실행 시킨다.<br>
()안에 있는걸 argument라고 한다. 

>preventDefault는 어떤 event의 기본행위든 발생 되지 않게 해준다.
>콘솔 값을 캡쳐 하였다. 

![image](https://user-images.githubusercontent.com/60457431/160620106-613aeefa-cacb-472d-b60e-ed7b07ab0156.png)

### Click Event (preventDefault)
```
function handleLinkClick(event){
  
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click", handleLinkClick)
```
> 이전에 사용 한 preventDefault를 다시 사용하였다. <br> 
이는 브라우저의 그 어떠한 동작도 막아 버린다.

> 이렇게 하면 addEventListener 안에 있는 함수는 직접 실행 하지 않는다.

### 유저이름 가져오기

> input에 값을 입력시 Input 창이 없어지게 해야 한다. <br>

CSS 추가
```
.hidden{
    /* 요소를 숨기게 된다. */
    display: none;
}

```
JS 추가
```
...
// Hidden Css를 변수 처리
const hidden_ClassName = "hidden"
...
// username에 loginInput.value값을 저장
const uesrname = loginInput.value;

// classList 찾아보기
loginForm.classList.add(hidden_ClassName)
console.log(uesrname);

```

> 입력한 유저 이름 화면에 띄우게 하기

HTML 
```
<Body>
    ...
    <h1 id="greeting" class="hidden"></h1>
    ...
</Body>
```

JS 
```
...
const greeting = document.querySelector("#greeting"); 
...
greeting.innerText = `안녕하세요 ${uesrname}`;
greeting.classList.remove(hidden_ClassName)

```
![image](https://user-images.githubusercontent.com/60457431/161166931-513aa9ce-d043-4263-998f-c5ad6a730942.png)
![image](https://user-images.githubusercontent.com/60457431/161166947-2b37552f-9c6e-4f58-a4a3-9eac03007fb2.png)

### 유저 이름 저장하기 

> setItem을 사용시 local storage에 정보를 저장 할 수 있다.

#### JS 코드
```    
localStorage.setItem("username", uesrname);
```
![image](https://user-images.githubusercontent.com/60457431/161863528-8a839546-460e-4ce3-8c94-02eb55f083e9.png)

### 유저 이름 가져오기 

> 먼저 HTML FORM을 수정 해야한다. 수정은 하기와 같이 진행 하였다.
#### HTML 코드
```
<form class="hidden" id="login-form">
        <input required maxlength="15" type="text" placeholder="what is your name">
        <button>Login</button>
</form>
```


>이전과 달라진건 class='hidden'을 추가 한것이다. <br>
이는 처음부터 form의 값을 안보이게 하는것이다.

![image](https://user-images.githubusercontent.com/60457431/162089874-63854bef-0f79-4d6e-b068-b81658e96ae2.png)

이렇게 한건 이후 JS소스에 설명 추가 하겠다. 

변수 값 username이 계속 나와서 잘못 하면 오타가 날수 있기에 변수를 고정 할것이다. 
> const USERNAME_KEY = "username";

> 앞에서 HTML form을 초기부터 hidden을 한 이유는 값을 입력 받고 새로 고침을 해야 확인 하는 문제가 있었기 떄문이다. <br>
이를 해결 하기 위해 userName이 아무것도 없을 시를 확인 해보니 "null" 값이 나왔다.

![image](https://user-images.githubusercontent.com/60457431/162089840-0dc8bcd2-e1ce-49ff-b4c8-2f21a458e2af.png)


이제 이를 가지고 하기 코드를 작성 하였다. 

```
function paintGreetings(username){
    greeting.innerText = `Hello ${savedUesrname}`
    greeting.classList.remove(hidden_ClassName)
}

// link.addEventListener("click", handleLinkClick)

// local storeage에 유저정보 유무 확인
// 아무값도 없을 시 null을 뱉어낸다.
const savedUesrname = localStorage.getItem(USERNAME_KEY);
console.log(savedUesrname);

if(savedUesrname  === null){
    // savedUesrname이 null이면 form의 hidden class을 삭제
    loginForm.classList.remove(hidden_ClassName)
    // preventDefault를 사용 시 addEventListener 안에 있는 함수는 직접 실행 하지 않는다. 
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUesrname);
}

```
> else를 보면 paintGreetings이란 것이 나오게 되었다. <br>
이는 윗부분에서 이름을 입력시 출력한것이 여러곳에서 반복적으로 나와서 funcation을 추가 한것이다. 

> if 부분 사진 추가

![image](https://user-images.githubusercontent.com/60457431/162089975-f00d2487-f396-4698-9594-3e1a712f0b43.png)<br>
![image](https://user-images.githubusercontent.com/60457431/162090018-ceac6b52-adcb-4676-9078-02745334c319.png)

> else 부분 사진 추가 <br>

![image](https://user-images.githubusercontent.com/60457431/162090105-a2bed88c-843c-4aae-8437-a01433f220ef.png)
![image](https://user-images.githubusercontent.com/60457431/162090154-a3145290-2894-4125-8d73-c0b93dd1681e.png)

==========================================================================

# Login 부분 복습 

## HTML 전체 코드
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
    <!-- input는 div가 아닌 form안에 있어야 한다. -->
    <!-- form 안에 input를 넣을 시 자동적으로 submit가 된다. -->
    <form class="hidden" id="login-form">
        <input required maxlength="15" type="text" placeholder="what is your name">
        <button>Login</button>
    </form>
    <!-- 평시에는 보이지 않지만 form에서 input 값을 넣어줄시 그걸 여기에 입력 -->
    <h1 id="greeting" class="hidden"></h1>
    <!-- <a href="https://www.naver.com">go</a> -->
    <script src="app.js"></script>
</body>
</html>
``` 
> 유저가 처음 앱을 열면 form과 h1은 CSS에 있는 hidden이라는 class때문에 숨져 진다. <br>

## JS 전체 코드 
```
// querySelector를 사용시에는 대상이 id인지 명확히 설명 해야 한다.
// querySelectot는 classname과 tagname 모두 검색이 가능하다. 

// const loginForm = document.querySelector("#login-form");

//문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환합니다. ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용
const loginForm = document.getElementById("login-form");

// input과 button을 끌어오기
// const loginInput = loginForm.querySelector("input"); 
// const loginButton = loginForm.querySelector("button");
// const link  = document.querySelector("a");

// 또다른 표현 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting"); 

// Hidden Css를 변수 처리
const hidden_ClassName = "hidden";
// 변수 고정 
const USERNAME_KEY = "username";

// ()을 더하면 브라우저가 보자마자 자동으로 이 function을 실행 시킨다, ()안에 있는걸 argument라고 한다. 

// 0408 설명 추가
// 이부분은 아무것도 보내지 않아도 된다.
function onLoginSubmit(evnet){
    // preventDefault는 어떤 event의 기본행위든 발생 되지 않게 해준다.
    // 브라우저의 동작을 허용하지 않고 막아버린다.
    evnet.preventDefault();
    // classList 찾아보기
    loginForm.classList.add(hidden_ClassName)    
    // setItem을 사용시 local storage에 정보를 저장 할 수 있다.
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // local storage에 뭔가를 저장하면 paintGreetings를 호출 하는 순간에 그 유저정보는 이미 local storage(USERNAME_KEY)에 저장되어 있다.
    paintGreetings();
}

function handleLinkClick(event){
    // preventDefault는 어떤 event의 기본행위든 발생 되지 않게 해준다.
    // 브라우저의 동작을 허용하지 않고 막아버린다.
    event.preventDefault();
    console.log(event);
}  

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY); 
    greeting.innerText = `Hello ${savedUesrname}`
    greeting.classList.remove(hidden_ClassName)
}

// link.addEventListener("click", handleLinkClick)

// local storeage에 유저정보 유무 확인
// 아무값도 없을 시 null을 뱉어낸다.
const savedUesrname = localStorage.getItem(USERNAME_KEY);
console.log(savedUesrname);

if(savedUesrname  === null){
    // savedUesrname이 null이면 form의 hidden class을 삭제
    loginForm.classList.remove(hidden_ClassName)
    // preventDefault를 사용 시 addEventListener 안에 있는 함수는 직접 실행 하지 않는다. 
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings();
}
``` 

> 이후 const savedUesrname = localStorage.getItem(USERNAME_KEY);의 USERNAME_KEY를 가지고 local storage를 확인 한다.<br >

사진 추가　

> 개발자 도구를 보면 username이라는 key와 그 값은 입력값이 있다.


