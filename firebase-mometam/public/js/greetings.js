// querySelector를 사용시에는 대상이 id인지 명확히 설명 해야 한다.
// querySelectot는 classname과 tagname 모두 검색이 가능하다. 

// const loginForm = document.querySelector("#login-form");

//문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환합니다. ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용
const loginForm = document.querySelector("#login-form");

// input과 button을 끌어오기
// const loginInput = loginForm.querySelector("input"); 
// const loginButton = loginForm.querySelector("button");
// const link  = document.querySelector("a");

// 또다른 표현 
const loginInput = document.querySelector("#login-form input");
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