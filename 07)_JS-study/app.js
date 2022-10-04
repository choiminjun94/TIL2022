// 조건문 

// prompt은 사용자에게 창을 띄어 주는 역할을 한다. 
// Message을 입력하지 않으면 JS는 멈추어 있다. 
const age = prompt("how old are you");
// const age = parseInt(prompt("how old are you"))
// int형타입을 string형 타입으로 변경을 위해서는 parseInt()를 사용 

//변수의 타입을 알기 위해서는 typeof를 사용
console.log(typeof age);
console.log(age, parseInt(age));