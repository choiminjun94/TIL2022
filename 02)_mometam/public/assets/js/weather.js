// 정상적인 실행 시 작업
function onGeoOK(Success){
    const lat = Position.coords.latitude;
    const lng = Position.coords.longitude;
    console.log("니 위치는 ", lat,lng);
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