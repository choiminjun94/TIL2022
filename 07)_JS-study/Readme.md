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