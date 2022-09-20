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