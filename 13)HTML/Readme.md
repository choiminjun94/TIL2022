# 0718

``` html
  <!-- strong은 그 내용이 중요하다는 의미를 내포.  -->
  <p>
    <strong>경고!</strong> 이것은 매우 위험함
  </p>
    <!-- em은 강세 요소 이다. -->
  <p>
    나는<em>당근</em>을 사랑합니다.<br>
    나는 당근을 <em>사랑</em>합니다.
  </p>

  <!-- 첨자태그 -->
  <!-- 지수,서수 -->
  <p>
    x<sup>3</sup>
  </p>
  <!-- 각주,변수,화화식 -->
  <p>
    H<sub>2</sub>O
  </p>

  <!-- 밑줄 태그 -->
  <!-- u tag는 철자 오류표시 -->
  <!-- CSS와 같이 사용한다. -->
  <p >
    <u style="text-decoration: #f00 wavy underline;">u 태그</u>입니다.
  </p>
  <!-- s tag는 더이상 유효하지 않는 정보 표시-->
  <p>
    <s>s 태그</s>입니다.
  </p>
```
![image](https://user-images.githubusercontent.com/60457431/179428577-98937d7c-be66-485a-b5a6-d879e8f1cae8.png)

# 0719 
## 속성 / 특성

``` html

  <h1>인용문 관련 태그</h1>
  <h2>blockquote와 cite 태그</h2>
  <blockquote cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
    <p>
      HTML &lt;blockquote&gt; 요소는 안쪽의 텍스트가 긴 <mark>인용문</mark>임을 나타냅니다. <br>
      주로 들여쓰기를 한 것으로 그려집니다. (외형을 바꾸는 법은 사용 일람을 참고하세요) <br>
      인용문의 출처 URL은 cite 특성으로, 출처 텍스트는 &lt;cite&gt; 요소로 제공할 수 있습니다.
    </p>
    <cite>&lt;blockquote&gt;: 인용 블록 요소</cite> from MDN
  </blockquote>

  <br><br>

  <h2>짧은 인용문을 위한 q 태그</h2>
  <p>
    <strong>q</strong> 태그에 대해 MDN 문서는
    <q cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/q"
    >HTML &lt;q&gt;요소는 둘러싼 텍스트가 짧은 <br> 인라인 <mark>인용문</mark>이라는것을 나타냅니다.</q>
    라고 설명하고 있습니다.
  </p>

  <br>  
  


  <h2>mark 태그</h2>
  <p>
    본 페이지는 "<mark>인용문</mark>"이란 키워드로 검색한 결과입니다. <br>
    <strong>mark</strong> 태그는 사용자의 행동과 관련 있는 부분<i>(예: 검색 결과)</i>, <br>
    또는 인용문에서 주시해야 할 부분들을 표시합니다.
  </p>
  <p>
    mark 태그 역시 CSS와 병행하여 사용해야 합니다.
  </p>
  <br>
  <br>
  <h1>abbr 태그로 머리글자 표현하기</h1>
  <p>
    <strong>abbr</strong> 태그를 사용하여
    <abbr title="HyperText Markup Language">HTML</abbr
      >을 표기한 문단입니다. 소스 보기로 코드륵 확인해부세요!
  </p>

``` 
![image](https://user-images.githubusercontent.com/60457431/179632479-4185f7d6-4885-485a-947a-de9c7b5f1543.png)

## 나열되는 요소

``` html

...
  <link rel="stylesheet" href="https://showcases.yalco.kr/html-css/01-04/05.css">
...
<body>
  <!-- 여기부터는 많이 쓰이는 것들 -->
  <!-- ★ ul, ol의 1촌 자식은 오직 li만 가능하다. ★-->
  <ul>
    <li>이틀치 옷</li>
    <li>세면도구</li>
    <li>수건</li> 
    <li>학습도구
      <ul>
        <li>노트북</li>
        <li>필기구</li>
        <li>교재</li>
      </ul>
    </li>
  </ul>
  
  <!-- ol은 숫자를 표시 -->
  <ol>
    <li>재료 준비
      <ul>
        <li>밥</li>
        <li>계란</li>
        <li>파</li>
        <li>간장</li>
      </ul>
    </li>
    <li>파를 기름에 볶기</li>
    <li>밥 넣고 볶기</li>
    <li>계란을 넣고 스크램블 </li>
    <li>간장을 넣고 마저 볶아 완서</li>
  </ol>

  <!-- dl,dt, dd-->
  <!-- 용어와 정의 나열하기 -->
  <!-- dt : dd는 1:1 또는 n:n 가능 -->
   
  <dl>
    
    <dt>프로그래밍</dt>
    <dd>컴퓨터 프로그램을 작성하는 일</dd>

    <dt>넓이</dt>
    <dt>광</dt>
    <dt>면적</dt>
    <dd>일정한 평면에 걸쳐 있는 공간이나 범위의 크기</dd>

    <dt>사과</dt>
    <dd>사과나무의 열매</dd>
    <dd>자기의 잘못을 인정하고 용서를 빎</dd>

  </dl>  
</body>

```
![image](https://user-images.githubusercontent.com/60457431/179636663-c220a4ce-c7c8-450e-9c98-fabe0b8a7f05.png)

# 0720
## 이미지 넣기

``` html 
  <!-- alt와 title을 동일한 이름을 넣지 않는다. -->
  <!-- 절대경로로 이미지 입력 -->
  <h3>절대경로 이미지</h3>
  <img 
    src="https://showcases.yalco.kr/html-css/01-05/coding.png" 
    alt="코딩중인 노트북"
    title="프로그래밍"
    width="600"
    height="300"
  >
  <br/>
  <h3>상대경로 이미지</h3>
  <img 
    src="./img/사진.png" 
    alt="상대경로 이미지"
  >
```
![image](https://user-images.githubusercontent.com/60457431/179864490-5c8c223f-b387-4c47-b862-e7d5eb33a072.png)

## 표 그리기 

> table - 테이플 

> caption - 표 설명 또는 제목 (선택사항) 

> tr - 테이블 행

> td - 테이블의 데이터 셀 

``` html 
  <table>
    <caption>1에서 9까지의 숫자들</caption>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </table>

```
![image](https://user-images.githubusercontent.com/60457431/180095324-e5ef46a5-105a-4ab5-9a28-c009710ba128.png)


> thead - 테이블의 헤더 부분	 - [tbody] 앞에 와야 함

> tbody - 테이블의 본문	 - 본 내용을 담음

> tfoot - 테이블의 푸터 부분	 - [tbody] 뒤에 와야 함

> th - 열 또는 행의 헤더	- [scope] 속성으로 row, col 중 선택

``` html 
  <table>
		<caption>웹개발 공부 기록</caption>
		<thead>
			<tr>
				<th scope="col">과목</th>
				<th scope="col">월</th>
				<th scope="col">화</th>
				<th scope="col">수</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">HTML</th>
				<td>60분</td>
				<td>60분</td>
				<td>0분</td>
			</tr>
			<tr>
				<th scope="row">CSS</th>
				<td>0분</td>
				<td>30분</td>
				<td>60분</td>
			</tr>
			<tr>
				<th scope="row">JS</th>
				<td>0분</td>
				<td>0분</td>
				<td>60분</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th>총 시간</th>
				<td>60분</td>
				<td>90분</td>
				<td>120분</td>
			</tr>
		</tfoot>
	</table>
```
![image](https://user-images.githubusercontent.com/60457431/180095365-8181a24a-da56-48f4-a096-7e5815555cec.png)


``` html

<!-- 요즘엔 거의 사용하지 않는다. -->
  <table>
		<tr>
			<td>1</td>
			<td colspan="2">2</td>
			<td>1</td>
		</tr>
		<tr>
			<td rowspan="3">3</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td colspan="2" rowspan="2">4</td>
		</tr>
		<tr>
			<td>1</td>
		</tr>
	</table>
```
![image](https://user-images.githubusercontent.com/60457431/180095408-1087c200-62d6-422e-9d81-f2870d053407.png)


``` html 
	<table>
		<colgroup>
			<col class="weekend">
			<col span="5">
			<col class="weekend">
		</colgroup>
		<thead>
			<tr>
				<th scope="col">일</th>
				<th scope="col">월</th>
				<th scope="col">화</th>
				<th scope="col">수</th>
				<th scope="col">목</th>
				<th scope="col">금</th>
				<th scope="col">토</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
			</tr>
			<tr>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
			</tr>
			<tr>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
			</tr>
			<tr>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
				<td>_</td>
			</tr>
		</tbody>
	</table>
  
</body>
```
![image](https://user-images.githubusercontent.com/60457431/180095431-8f9955b8-5e7e-4f15-a0af-513c7d1c3e66.png)


``` html 

	<a href="https://www.google.com" target="_blank">구글로 가기</a>
<br/>
<br/>
<br/>
	<a href="https://www.google.com" target="_blank" >
	<img src="https://showcases.yalco.kr/html-css/01-07/yalco-logo.png" alt="강의 사이트로 가기">
</a>

```
![image](https://user-images.githubusercontent.com/60457431/180331346-af70760c-402f-4cc8-a10c-74f456e9538c.png)


``` html 

<a href="#target_20">타깃으로 이동</a>

<p id="target_1">id: target_1</p>
<p id="target_2">id: target_2</p>
<p id="target_3">id: target_3</p>
<p id="target_4">id: target_4</p>
<p id="target_5">id: target_5</p>
<p id="target_6">id: target_6</p>
<p id="target_7">id: target_7</p>
<p id="target_8">id: target_8</p>
<p id="target_9">id: target_9</p>
<p id="target_10">id: target_10</p>
<p id="target_11">id: target_11</p>
<p id="target_12">id: target_12</p>
<p id="target_13">id: target_13</p>
<p id="target_14">id: target_14</p>
<p id="target_15">id: target_15</p>
<p id="target_16">id: target_16</p>
<p id="target_17">id: target_17</p>
<p id="target_18">id: target_18</p>
<p id="target_19">id: target_19</p>
<p id="target_20">id: target_20</p>
<p id="target_21">id: target_21</p>
<p id="target_22">id: target_22</p>
<p id="target_23">id: target_23</p>
<p id="target_24">id: target_24</p>
<p id="target_25">id: target_25</p>
<p id="target_26">id: target_26</p>
<p id="target_27">id: target_27</p>
<p id="target_28">id: target_28</p>
<p id="target_29">id: target_29</p>
<p id="target_30">id: target_30</p>

```

![image](https://user-images.githubusercontent.com/60457431/180331374-45c623cc-f8f4-40a1-a584-d9f78f7f47b8.png)
