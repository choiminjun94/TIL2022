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

