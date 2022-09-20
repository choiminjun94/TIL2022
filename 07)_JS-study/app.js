//Object
// 항목을 가진 데이터를 저장해주는 역할
// 배열과 다른 점은 무엇을 뜻하는지 알수 없기 때문이다. 
const player = {
  name : "민준",
  points : 20,
  fat : true
}

console.log(player);
console.log(player.name);

// 배열 항목 추가하기
player.country ="ROK";
console.log(player);

// 배열 항목 값 변경하기 
player.points = player.points+30;
console.log(player.points);


