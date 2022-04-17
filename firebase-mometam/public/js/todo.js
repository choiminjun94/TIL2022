const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    // li는 span이라는 자식을 가지게 된다.
    li.appendChild(span)
    // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 되는거다.
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

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
    //paintToDo를 호출
    paintToDo(newTodo)
}

toDoForm.addEventListener("submit", handleToDoSubmit);