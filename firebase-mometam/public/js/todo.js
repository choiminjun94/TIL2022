const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 새로고침 방지
function handleToDoSubmit(event){
    event.preventDefault();
    //input 값 가져오기
    console.log(toDoInput.value);
    // 비우기 전에 input 값 저장하기  
    // input의 현재 value를 새로운 변수에 복사
    const newTodo = toDoInput.value;
    // enter 입력시 input 비우게 만들기
    toDoInput.value = "";

}

toDoForm.addEventListener("submit", handleToDoSubmit);