// querySelector를 사용시에는 대상이 id인지 명확히 설명 해야 한다.
// querySelectot는 classname과 tagname 모두 검색이 가능하다. 

// const loginForm = document.querySelector("#login-form");

//문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환합니다. ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용
const loginForm = document.getElementById("login-form");

// input과 button을 끌어오기
const loginInput = loginForm.querySelector("input"); 
const loginButton = loginForm.querySelector("button");

const link  = document.querySelector("a");


// 또다른 표현 
// const loginInput1 = loginForm.querySelector("#login-form input");
// const loginButton2 = loginForm.querySelector("#login-form button");

// ()을 더하면 브라우저가 보자마자 자동으로 이 function을 실행 시킨다. .
// ()안에 있는걸 argument라고 한다. 
function onLoginSubmit(evnet){
    // preventDefault는 어떤 event의 기본행위든 발생 되지 않게 해준다.
    evnet.preventDefault();
    console.log(event);
    console.log(loginInput.value);
    
}

function handleLinkClick(){
    alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick)

