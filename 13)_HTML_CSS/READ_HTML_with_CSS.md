# 0816 

## CSS 적용 

``` html 

<!DOCTYPE html>
<html lang="ko">
<head>
  ...
  <title>HTML & CSS 02-01-01</title>

  <!-- Head 안에서는 어디에서든 사용이 가능하다. -->
  <style>
    .style-1 {
      color: olivedrab;
    }
  </style>

  <link rel="stylesheet" href="../CSS/style.css">

</head>
<body>

  <h1>CSS를 적용하는 세 가지 방법</h1>

  <p>
    <!-- 인라인 스타일은 특별한 경우가 아닌 경우 사용하지 않는다. -->
    <b style="color: tomato;">
      인라인 스타일(inline style)
    </b>
    방식은 HTML 태그마다 style 속성으로 CSS 코드를 넣어주는 방식입니다. <br> 여러 요소들에 공통 속성을 재사용하여 부여할 수 없고 HTML 코드와 CSS 코드가 분리되지 않기 때문에 <br> 특별한 경우를 제외하고는 사용되지 않습니다.
  </p>
  <p>
    <!-- 전체 코드가 적은 경우 사용  -->
    <b class="style-1">내부 스타일 시트(internal style sheet)</b> 방식은 head 태그 안에 style 태그를 두고 그 안에 CSS 코드를 작성하는 방식입니다. <br>
    HTML과 CSS의 전체 코드량이 많지 않고 CSS가 해당 HTML 문서에서만 적용될 경우 <br>
    유용하게 사용될 수 있습니다.
  </p>
  <p>
    <!-- style.css 파일을 사용 -->
    <!-- 실전에서 가장 많이 사용 -->
    <b class="style-2">링킹 스타일 시트(linking style sheet)</b> 방식은 외부의 CSS 파일을 HTML 문서에 연결하는 것입니다. <br>
    HTML과 CSS의 코드가 분리되고 CSS 코드를 여러 HTML 파일에서 공통으로 사용할 수 있으므로 <br>
    가장 널리 사용되는 방식입니다.
  </p>
  
</body>
</html>

```

``` css
.style-2{
  color: brown;
}

```

![image](https://user-images.githubusercontent.com/60457431/184736453-f91bf055-3de4-441b-a254-e1cbf9351ffa.png)

# 0824

## 기본 & 그룹선택자
## HTML
``` html
<head>
...
<link rel="stylesheet" href="../CSS/style.css">
...
</head>
<body>
  <h1>기본 & 그룹 선택자</h1>
  <span>
    span 요소
  </span>
  <p>
    p 요소
  </p>
  <p class="blue">
    p 요소, class는 blue
  </p>
  <span class="blue">
    span 요소, class는 blue
  </span>
  <!-- 2개의 클래스를 가지고 있다. -->
  <!-- 이럴때에는 스페이스를 넣어 구분 -->
  <p class="blue dark">
    p 요소, class는 blue와 dark
  </p>
  <p id="red">
    p 요소, class는 blue, id는 red
  </p>
</body>
</html>
```
## CSS
``` css
/* 모든 요소 선택 */
* {
  font-weight: bold;
  color : darkgoldenrod;
}

/* 같은 선택자의 경우 뒤에 오는 것이 우선순위가 높다. */
* {
  color: red;
}

p {
  color: olive;
}
/* class 선택자  */
/* 태그보다 우선순위가 높다. */
/* 페이지상의 여러 요소가 같은 class를 가질 수 있음  */
.blue {
  color : slateblue
}

/* 다른 선택자에 이어붙일 수 있음 (태그, 클래스 등 ....) */
/* 선택자는 구체적일수록 우선순위 높음 */
p.blue {
  color: pink;
}
/* 2개의 클래스인 경우 */
.blue.dark{
  color: mediumblue;
}

/* id 선택자  */
/* class보다 우선순위가 높음 */
/* id는 페이지상에서 요소보다 고유해야 함 */
#red{
  color: tomato;
}
/* 그룹 선택자 */
span, .dark, #red{
  text-decoration: underline;
}


```
![image](https://user-images.githubusercontent.com/60457431/186282819-01b5c9e8-6592-40e1-90ca-fcce8856ee34.png)

## HTML 

``` html 

<!DOCTYPE html>
<html lang="ko">
<head>
	<link rel="stylesheet" href="../CSS/style.css">
  <title>HTML & CSS 02-01-03</title>
</head>
<body>

	<h1>결합자와 가상 클래스</h1>

	<ul class="outer">
		<li>육류</li>
		<li>채소</li>
		<li>유제품</li>
		<li>과일
			<ul>
				<li>사과</li>
				<li>포도</li>
				<li>딸기</li>
				<li>키위</li>
			</ul>
		</li>
	</ul>

	<ol>
		<li>한놈</li>
		<li>두시기</li>
		<li class="starter">석삼</li>
		<li>너구리</li>
		<li>다섯놈</li>
		<li>육개장</li>
		<li>칠푼이</li>
		<li>팔보채</li>
		<li>구공탄</li>
	</ol>
	
</body>
</html>

```
## CSS 

``` CSS
/* 자손 결합자 */
.outer li {
	color: olivedrab;
}

/* 자식(1촌 자손) 결합자 */
.outer > li {
	color: dodgerblue;
}
/* 1촌 자손의 자손 */
.outer > li li {
	text-decoration: underline;
}

/* 뒤따르는 모든 동생들 결합자 */
/*  이 클래스 아래 부터 적용 */
.starter ~ li {
	font-style: italic;
}

/* 뒤따르는 바로 다음 동생 결합자 */
.starter + li {
	font-weight: bold;
}

/* 첫 번째, 마지막 요소 가상 클래스 */
ol li:first-child,
ol li:last-child {
	color: yellowgreen;
}

/* ~가 아닌 요소 가상 클래스 */
.outer > li:not(:last-child) {
	text-decoration: line-through;
}

ul:not(.outer) li {
	font-weight: bold;
}

/* ~번째 요소 가상 클래스 */
/* nth-child는 부모안에 모든 요소 중 N번째 요소*/
/* #, #n, #n+#, odd, even 등 시도해보기 */
ol li:nth-child(even) {
	font-weight: bold;
	color: deeppink;
}

/* 마우스오버 가상 클래스 */
li:hover, 
ol li:nth-child(even):hover {
	font-weight: bold;
	color: blue;
}

```
![image](https://user-images.githubusercontent.com/60457431/186286220-9b2b4649-90fa-4ebd-a5a6-555a4af43989.png)

# 0825

## 글자와 텍스트 스타일
## HTML

``` html 

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../CSS/style.css">
	<title>CSS 글자와 텍스트 스타일</title>
</head>
<body>
	<p>폰트 스타일과 굵기</p>
	<br/>

	바깥
	<div>중간
		<div>안쪽</div>
	</div>
	
</body>
</html>

```
## CSS
``` Css

p {
	/* 폰트 기울기 */
	/* normal, italic, oblique*/
	font-style: oblique;
	/* normal, bold, 100 ~ 900 */
	font-weight: bold;
} 

html { font-size: 14px; }
/* html의 font 사이즈에 영향을 받는다. */
/* html font-size의 200가 커진다.  */
div { 
		font-size: 2em; 
}


```
![image](https://user-images.githubusercontent.com/60457431/186537047-b4ed948c-1019-446e-a655-00158b0ac1ab.png)

![image](https://user-images.githubusercontent.com/60457431/186537077-d5ee82e8-21fc-49f5-a00f-3c95a6704047.png)

![image](https://user-images.githubusercontent.com/60457431/186536999-6656c20b-b712-46bc-ba0f-b46881749b3f.png)

<br/>
<br/>

## HTML
``` html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../CSS/style.css">
	<title>CSS 글자와 텍스트 스타일</title>
</head>
<body>
	
	<p>HTML & CSS Programming is fun!</p>

</body>
</html>

```
## CSS
``` css 

p {
	
  text-decoration: wavy overline blue;
	/* 나중에 나온것이 우선 순위가 높다. */
	text-decoration: red wavy underline;

  /* capitalize(영문 첫번째 글자들 대문자화, uppercase(전부 대문자), lowercase(전부 소문자) */
  text-transform: uppercase;
}

```
![image](https://user-images.githubusercontent.com/60457431/186537775-ba11c9b7-4f35-45db-8dfe-f017622cf2e1.png)


참고 : https://developer.mozilla.org/ko/docs/Web/CSS/text-decoration

##  문단과 목록 스타일
## HTML
``` html 

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../CSS/style.css">
	<title>Lesson 3. 문단과 목록 스타일</title>
</head>
<body>

	<p>소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀(曾孫女)딸이라는 걸 알 수 있었다. 소녀는 개울에다 손을 잠그고 물장난을 하고 있는 것이다. 서울서는 이런 개울물을 보지 못하기나 한 듯이. 벌써 며칠째 소녀는, 학교에서 돌아오는 길에 물장난이었다. 그런데, 어제까지 개울 기슭에서 하더니, 오늘은 징검다리 한가운데 앉아서 하고 있다. 소년은 개울둑에 앉아 버렸다. 소녀가 비키기를 기다리자는 것이다.</p>

</body>
</html>


```
## CSS
``` css

p {
  /* left, center, right, justify */
  text-align: justify;

  letter-spacing: 5px;
  word-spacing: 0;
  line-height: 1.5em;
}

```
![image](https://user-images.githubusercontent.com/60457431/186660642-1ff13fd9-c232-4985-8db4-7f4b2b59f6d6.png)

![image](https://user-images.githubusercontent.com/60457431/186660812-d5b5c988-30bc-44f1-b9b7-4a2978c9ab7b.png)


## HTML 

``` html 

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../CSS/style.css">
	<title>Lesson 3. 문단과 목록 스타일</title>
</head>
<body>

	<ul>
		<li>ul 아이템 1</li>
		<li>ul 아이템 2</li>
		<li>ul 아이템 3</li>
	</ul>
	<ol>
		<li>li 아이템 1</li>
		<li>li 아이템 2</li>
		<li>li 아이템 3</li>
	</ol>
	
</body>
</html>

```

``` CSS 

ul {
  list-style: circle;
}

/* li별로 지정하는 것도 가능 */
/* url을 사용하여 이미지도 넣을 수 있다. */
/* ul 안에 들어 있는 li 중 첫번째 아이 */
ul > li:first-child {
  list-style: "🚩 "
}

ol {
  list-style: lower-alpha;
}

```
![image](https://user-images.githubusercontent.com/60457431/186660723-e057334b-e6ef-486e-9ee2-ce2f56b383b2.png)

# 0829

## 색 선택

## HTML

```html 

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lesson 4. 색표현</title>
	<link rel="stylesheet" href=".././CSS/style.css">
</head>
<body>
	<p>글자와 배경에 색상을 적용해보세요!</p>
</body>
</html>

```

## CSS

```CSS
p {
  /* 글자색 */
  color: white;

  /* 배경색 */
  background-color: #D24C75	;

  font-weight: bold;
}

```