const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// paintToDo가 그려질때 마다 그 텍스트를 array에 push
let toDos = [];
//
function saveToDos(){
    // toDos array의 내용을 localStorage에 넣어주는것
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 항목 삭제
function deleteToDo(event){
    //console.dir(event.target)를 사용하여 parentElement 찾아보기
    // console.dir(event.target);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

// Todo List 쓰기
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 되는거다.
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌"

    //무언가 클릳 되었는다는것을 알기 위햐선 EventListener를 사용
    button.addEventListener("click", deleteToDo);

    // li는 span이라는 자식을 가지게 된다.
    li.appendChild(span);
    li.appendChild(button);
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
    const newTodoObj = {
        text :newTodo,
        id : Date.now(),
    };
    // 텍스트를 toDos array에 push
    toDos.push(newTodoObj)
    //paintToDo를 호출 
    paintToDo(newTodoObj)
    //-- 0420 기준 화면에 그려준 toDo를 saveTodos function에 todo를 저장
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 다시 할때 에로우 Funcation 사용 하기

// 입력된 String을 array로 변환
// saved Todos를 얻어오기

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos= JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos); 

    // array는 forEach라는 것을 가질수 있다.
    // 내가 어떤 Item를 가지고 있는지 모르면 무용지물 이다.
    parsedToDos.forEach(paintToDo);
}


