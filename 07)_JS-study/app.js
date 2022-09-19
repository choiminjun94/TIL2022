// 배열이 없는 경우
const mon  ="mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";

// 배열 선언 및 출력
// 배열 안에는 String, 숫자등등을 넣을 수 있다.
const dayOfWeek = [mon, tue, wed, thu]

const nonsense = [1,2, "hello", false, null, true, undefined, "minjun"]

console.log(dayOfWeek);
console.log(nonsense);

//배열에서 특정 값 찾기
console.log(dayOfWeek[2]);

//배열에 값 추가하기
dayOfWeek.push("fri")
console.log(dayOfWeek);