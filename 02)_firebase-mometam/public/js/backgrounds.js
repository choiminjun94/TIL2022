const images =["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

// JS에서 이미지를 만들고 이걸 html에 추가 하는 작업 '
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

//appendChild는 body에 HTML을 추가하는것 이다.
document.body.appendChild(bgImage);