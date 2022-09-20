// Function Part 1 
// Function은 계속 반복해서 사용할 수  있는 코드 조각이라 생각 

function sayHello(){
  console.log("Function 공부!!");
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

// 바깥 세상에서 뭔가를 받는 방법
function functionStudy1(nameOfPerson){
  console.log(nameOfPerson);
}

functionStudy1("민준");
functionStudy1("용래");
functionStudy1("진건");

// argument를 하나만 받을수 잇는것이 아니다.
function functionStudy(nameOfPerson, ageOfPerson){
  console.log(nameOfPerson, ageOfPerson);
}

functionStudy("민준", 29);
functionStudy("용래", 25);
functionStudy("진건", 28);