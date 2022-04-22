const quotes = [
  {
    quote: "인간의 능력이란 그렇게 극단적인 차이가 있는 것이 아닙니다. 자기가 하고 있는 일에 정열과 의욕을 가지면 상황도 유리해지고 올바른 해결책도 나오기 마련입니다.",
    author: "신격호",
  },
  {
    quote: "스스로 운이 나쁘다고 생각하지 않는 한, 나쁜 운이란 건 없다",
    author: "정주영",
  },
  {
    quote:
      "스스로 운이 나쁘다고 생각하지 않는 한, 나쁜 운이란 건 없다",
    author: "정주영",
  },
  {
    quote: "무슨 일을 시작하던지 된다는 확신 90%와 반드시 되게 할 수 있다는 자신감 10% 외에 안될 수도 있다는 생각은 단 1%도 가지지 않는다",
    author: "정주영",
  },
  {
    quote: "시련일 뿐이지 실패는 아니다. 내가 실패라고 생각하지 않는 한 이것은 실패일 수 없다",
    author: "정주영",
  },
  {
    quote: "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
    author: "파블로 피카소",
  },
  {
    quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다",
    author: " 토마스 제퍼슨",
  },
  {
    quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다. ",
    author: "윈스턴 처칠",
  },
  {
    quote: "모든 일의 성패는 그 일을 하는 사람의 사고와 자세에 달려 있다.",
    author: "정주영",
  },
  {
    quote: "해보기는 해봤어?",
    author: "정주영",
  },
];

//querySelector로 가져온 첫번째 span값을 사용할려면 first-child 라는것을 사용한다.

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;