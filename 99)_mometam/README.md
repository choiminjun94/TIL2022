# Mometam 

## 0326 JS Login
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