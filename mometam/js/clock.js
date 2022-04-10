const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("interval Check");
}

setInterval(sayHello, 3000);

// 얼마 뒤에 시작 할것인지를 지정
setTimeout(sayHello, 3000);