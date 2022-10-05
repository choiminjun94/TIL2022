// 조건문 


const age = parseInt(prompt("how old are you"))


if(isNaN(age) || age < 0){
  console.log("양의 나이를 입력 하세요");
}else if (age < 18) {
  console.log("미성년자 입니다.");
}else if(age >= 18 && age <= 62) { 
  console.log("빡세게 일하세요");
}else{
  console.log("복지 해택을 받으세요");
}