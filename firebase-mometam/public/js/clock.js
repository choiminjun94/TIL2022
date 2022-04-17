const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // String(다른 타입); 다른 타입을 String으로 감싸면 String으로 변환된다.
    // padStart는 대상이 되는 String이 가져야 하는 길이를 2로 설정하고 길이가 2가 되지 않으면 앞쪽에 0을 붙인다.
    const hours = String(datㅈe.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours} : ${minutes} : ${seconds}`;
}

// getClock를 즉시 호출
getClock();
// 매초 마다 getClock을 다시 실행
setInterval(getClock, 1000);

// 얼마 뒤에 시작 할것인지를 지정 - setTime
// setTimeout(sayHello, 3000);

