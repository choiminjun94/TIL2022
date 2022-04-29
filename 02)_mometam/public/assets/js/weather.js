const API_KEY ="941a63cc93523e085e7e00a25cd612d7"
// 정상적인 실행 시 작업
function onGeoOK(Position){
    const lat = Position.coords.latitude;
    const lon = Position.coords.longitude;
    console.log("니 위치는 ", lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}
//에러가 발생 시 작업
function onGeoError(){
    alert("에러발생~~")
}
// JS에서 브라우저에 위치 좌표를 준다.
// getCurrentPosition는 2개의 argument가 필요하다.
// 한개의 모든게 잘 되었을때 실행 될 함수이다. 
// 다른 한개를 실패 했을시 실행 될 함수이다.
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);