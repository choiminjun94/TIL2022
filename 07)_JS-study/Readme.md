# 0920
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

배열 특정 값 찾기 

PC는 0부터 시작하기에 2인 경우 3번째 값을 찾는다. 

```js
//배열에서 특정 값 찾기
console.log(dayOfWeek[2]);

```

배열에 값 추가하기 

``` js

dayOfWeek.push("fri")

```