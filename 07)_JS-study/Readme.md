# 0920

# Arrays
## 배열  선언의 이유

배열을 사용하지 않으면 하기와 같이 여러 변수 선언을 진행 해야 한다.

```js
const mon  ="mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
```

배열 선언 및 출력
배열 안에는 String, 숫자등등을 넣을 수 있다.

```js
const dayOfWeek = [mon, tue, wed, thu]

const nonsense = [1,2, "hello", false, null, true, undefined, "minjun"]

console.log(dayOfWeek);
console.log(nonsense);
```
![image](https://user-images.githubusercontent.com/60457431/191134804-1221328c-4fa7-4420-ac2a-9bce4f7562b3.png)


배열 특정 값 찾기 

PC는 0부터 시작하기에 2인 경우 3번째 값을 찾는다. 

```js
//배열에서 특정 값 찾기
console.log(dayOfWeek[2]);

```
![image](https://user-images.githubusercontent.com/60457431/191134847-9196bd32-ce07-42d7-bab5-6e653c2157cf.png)

배열에 값 추가하기 

``` js

dayOfWeek.push("fri")

```
![image](https://user-images.githubusercontent.com/60457431/191134877-a6fffff4-3eb0-446a-a56c-9d5e56d5944f.png)

# Object
### 항목을 가진 데이터를 저장해주는 역할
###  배열과 다른 점은 무엇을 뜻하는지 알수 없기 때문이다. 

```js
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
player.points = player.poi

```

![image](https://user-images.githubusercontent.com/60457431/191378941-0e24679d-3388-4783-8406-a944fcfc9377.png)

# 0921

# Function 
### Function은 계속 반복해서 사용할 수  있는 코드 조각이라 생각 

```js
function sayHello(){
  console.log("Function 공부!!");
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

```

![image](https://user-images.githubusercontent.com/60457431/191380119-2a40fea6-b817-4eb5-9f4e-55cc0da89b8a.png)

### 바깥 세상에서 뭔가를 받는 방법 

``` js
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

```
![image](https://user-images.githubusercontent.com/60457431/191380965-0f6b1b5f-e2de-4a44-8273-4119e8f11587.png)

### Function을 활용한 계산식과 Object 내에서의 사용
```js
function plus(FirstName, SecondNumber){
  console.log(FirstName + SecondNumber);
}

plus(50, 20)

function divide(FirstName, SecondNumber){
  console.log(FirstName / SecondNumber);
}
divide(40, 20)

const player = {
  name : "Minjun",
  sayHello: function(otherPlayerName){
    console.log("hello "+ otherPlayerName+" nice to meet you");
  }
}

console.log(player.name);

player.sayHello("Kim")
player.sayHello("Choi")

```
![image](https://user-images.githubusercontent.com/60457431/191381993-f3aa4996-1af6-4c4a-b3c4-1f1519b98557.png)

# 0922 
## Recap No.1 

let은 업데이트가 가능, const는 불가능, var는 왠만해서는 사용하지 않기 <br/>

### Null이란
null 타입 변수의 경우는 명시적으로 값이 비어있음을 나타내는데 사용 <br/>
아무것도 참조하고 있지 않다라는 의미가 담겨 있으며 주로 객체를 담을 변수를 초기화할 때 많이 사용 <br/>
타입은 데이터 타입이다. <br/>

### undefined이란 
값이 할당되지 않은 변수 <br/>
undefined 타입은 변수 자체의 값 또한 undefined 이다. <br/> 
정의되지 않은 것, 초기화되어 있지 않거나 존재하지 않는 객체의 프로퍼티 및 존재하지 않는 배열의 원소값에 접근하려고 할때 얻어지는 변수의 값입니다 <br/>

### 차이점 
분명한 차이점은 undefined는 변수를 선언만 하더라도 할당되지만 null은 변수를 선언한 후에 null로 값을 바꾼다는 점입니다.
<br>
``` js 

// Recap (복습)

const a = 5; 

// const isMinFat = true;
let isMinFat = true;

isMinFat = false;
console.log(isMinFat);

// null와 undefined
let hello;
console.log(hello); 

let hello2 = null;
console.log(hello2);


```

![image](https://user-images.githubusercontent.com/60457431/191626242-dc0ef3d3-f383-4072-a047-61d2f3648dd2.png)

# 0927 

## Return의 이해 

``` js
// Returns

const age = 24;

function calculateKrage(ageOfForeigner){
  return ageOfForeigner+2;
}

const krAge = calculateKrage(age);

console.log(krAge);

// return 이해
const min = 1; 

function mintest(minreturn){
  min + 10000;
  return "hello";
}

const minIns = mintest(min);

console.log(minIns);


```
![image](https://user-images.githubusercontent.com/60457431/192397337-0ec4a53c-3a2a-42fe-9193-fcc5a9225123.png)

아래의 코드는 서로 의존하는 형식이기에 log가 따로 입력 되지는 않는다. <br>
결과과는  아래의 이미지를 참조 하기

``` js 
# Return
### return을 하는 순간 function은 종료 된다.


const calculator = {
  plus : function(a,b){
    return a+b 
  },
  minus : function(a,b){
    return a-b;
  },
  times: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  },
  power: function(a,b){
    return a ** b;
  }
}

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10 );
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

```
![image](https://user-images.githubusercontent.com/60457431/192398349-a39eec7e-58b0-4ebd-8d72-4a56cbe9ce60.png)

# 1005 조건문 

prompt은 사용자에게 창을 띄어 주는 역할을 한다. <br>
하지만 이제는 안 사용하는 방식이다. <br>
prompt가 실행되고 값을 입력 하지 않으면 JS는 멈추어 있는다. <br>
int형타입을 string형 타입으로 변경을 위해서는 parseInt()를 사용 

``` js 
const age = prompt("how old are you");

// 변수의 타입을 알기 위해서는 typeof를 사용
console.log(typeof age);
console.log(age, parseInt(age));

```
![image](https://user-images.githubusercontent.com/60457431/193948477-6d04b487-7566-44df-af19-0bdfa6faaba8.png)

![image](https://user-images.githubusercontent.com/60457431/193948487-77eb79f3-9677-4b7c-9f15-789a28405b87.png)

``` js 

const age = parseInt(prompt("how old are you"))

console.log(typeof age);
console.log(age, parseInt(age));

```
![image](https://user-images.githubusercontent.com/60457431/193948527-482b2139-a9f1-4856-9842-e68cea6c6bcf.png)

![image](https://user-images.githubusercontent.com/60457431/193948544-fd30b246-be98-4422-afda-c65e2012a5c7.png)

# 1006 조건문2 

isNaN() 함수는 숫자가 아닌 값을 찾는 함수입니다.<br/>
인수가 숫자가 아니면(Not a Number) True를 반환합니다.<br/>
인수가 숫자이면 False를 반환합니다. <br/>

```js 

const age = parseInt(prompt("how old are you"))
console.log(isNaN(age));

```
![image](https://user-images.githubusercontent.com/60457431/194179166-769e3f54-f01d-4b2f-b9e0-b62b7c140244.png)
![image](https://user-images.githubusercontent.com/60457431/194179188-7698c1d8-d732-4980-a87c-5e155ddf4ec0.png)
<br/>
<br/>
![image](https://user-images.githubusercontent.com/60457431/194179241-1a01ea24-e0ec-46eb-b675-e995614c7878.png)
![image](https://user-images.githubusercontent.com/60457431/194179254-10974eca-c784-446f-a1a6-92754830c229.png)
<br/>
<br/>


``` js 

const age = parseInt(prompt("how old are you"))

if(isNaN(age)){
  console.log("숫자를 입력 하시오");
}else{
  console.log("숫자 입니다.");
}

```
![image](https://user-images.githubusercontent.com/60457431/194179341-95fadba7-0cad-498c-876a-6e3d6ffb4697.png)
![image](https://user-images.githubusercontent.com/60457431/194179352-a722b6a1-313e-4698-bee5-8efeeb11cd82.png)
<br/>
<br/>
![image](https://user-images.githubusercontent.com/60457431/194179377-d289470b-5dd3-485e-ba14-2e88433e05a5.png)
![image](https://user-images.githubusercontent.com/60457431/194179390-498af1c7-ba29-48b7-a86a-2bd5b529db0c.png)

```js 

const age = parseInt(prompt("how old are you"))


if(isNaN(age)){
  console.log("숫자를 입력 하시오");
}else if (age < 18) {
  console.log("미성년자 입니다.");
}else { 
  console.log("성인 입니다. ");
}

```


``` js 

if(isNaN(age) || age < 0){
  console.log("양의 나이를 입력 하세요");
}else if (age < 18) {
  console.log("미성년자 입니다.");
}else if(age >= 18 && age <= 62) { 
  console.log("빡세게 일하세요");
}else{
  console.log("복지 해택을 받으세요");
}

```

