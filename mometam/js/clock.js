const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
}

// getClock를 즉시 호출
getClock();
// 매초 마다 getClock을 다시 실행
setInterval(getClock, 1000);

// 얼마 뒤에 시작 할것인지를 지정 - setTime
// setTimeout(sayHello, 3000);

