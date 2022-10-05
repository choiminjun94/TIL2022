// 조건문 


const age = parseInt(prompt("how old are you"))
// isNaN() 함수는 숫자가 아닌 값을 찾는 함수입니다.
//  인수가 숫자가 아니면(Not a Number) True를 반환합니다. 
// 인수가 숫자이면 False를 반환합니다.

// console.log(isNaN(age));

if(isNaN(age)){
  console.log("숫자를 입력 하시오");
}else{
  console.log("숫자 입니다.");
}