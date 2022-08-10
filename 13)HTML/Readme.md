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

# 0809
## 사용자로부터 입력 받기 1

![image](https://user-images.githubusercontent.com/60457431/183528505-59798fc4-0666-4815-9b99-05b82df8cfca.png)

``` html 
	<!-- autocomplete은  자동완성을 설정해 주는것 민감은 정보를 입력시 에는 OFF를 사용하는것이 좋다.-->
	<form method="get" autocomplete="off">
		<label for="name">이름</label>
    <input id="name" name="my-name" type="text">

    <br><br>

    <label for="age">나이</label>
    <input id="age" name="my-age" type="number">

    <br><br>

    <button type="submit">제출</button>
    <button type="reset">초기화</button>

	</form>

```

![image](https://user-images.githubusercontent.com/60457431/183528530-669af520-40de-417a-ab0e-27dfda95b36b.png)

<br>

![image](https://user-images.githubusercontent.com/60457431/183528573-ed2530b5-aae2-45c6-adf7-90bbff4001b8.png)

``` html 

<!-- fieldset는  폼 태그 내 입력요소와 라벨들을 그룹화	// disabled 속성: 포함된 입력요소 비활성화-->
	<fieldset>
		<legend>반장</legend>

		<label for="name">이름</label>
		<input id="name_1" name="name_1" type="text">
		<br><br>

		<label for="age">나이</label>
		<input id="age_1" name="age_1" type="number">

	</fieldset>
	<br>

	<fieldset>
		<legend>부반장</legend>

		<label for="name">이름</label>
		<input id="name_2" name="name_2" type="text">
		<br><br>

		<label for="age">나이</label>
		<input id="age_2" name="age_2" type="number">

	</fieldset>
	<br>

	<fieldset form="classForm" disabled>
		<legend>서기</legend>

		<label for="name">이름</label>
		<input id="name_3" name="name_3" type="text">
		<br><br>

		<label for="age">나이</label>
		<input id="age_3" name="age_3" type="number">
	</fieldset>

```
![image](https://user-images.githubusercontent.com/60457431/183528635-3fe23183-c03b-4ad9-a649-771427338269.png)

# 0810
## 사용자로부터 입력 받기 2

### 텍스트 관련 인풋 타입

![image](https://user-images.githubusercontent.com/60457431/183779037-d003817d-9dfc-4d6f-9bdb-ba981273c2ff.png) 

``` html 
<h1>텍스트 관련 인풋 타입</h1>

  <form action="#">
		<!-- 글자수 5개로 제한 -->
    <label for="txtIp">text</label> <br>
    <input 
      id="txtIp"
      type="text"
      placeholder="5자 이하"
      maxlength="5"
    >
    <br><br>
		<!-- 글자수 4개 이상으로 제한 -->
    <label for="pwdIp">password</label> <br>
    <input
      id="pwdIp"
      type="password"
      placeholder="4자 이상"
      minlength="4"
    >
    <br><br>
		<!-- Search는 Chrome으로 제한 시 X가 생긴다. -->
    <label for="srchIp">search</label> <br>
    <input id="srchIp" type="search">
    <br><br>
		<!--  -->
    <label for="tlIp">tel</label> <br>
    <input id="tlIp" type="tel">
    <br><br>
    <button type="submit">제출</button>
  </form>

```

![image](https://user-images.githubusercontent.com/60457431/183779093-00d67e0c-cc38-4615-aeec-4e378f802451.png)

<br><br>

### 숫자 관련 인풋 타입

![image](https://user-images.githubusercontent.com/60457431/183779118-bba7cc8c-2b30-4a5b-8dd8-79b33b080101.png) 

``` html 

  <h1>숫자 관련 인풋 타입</h1>

  <form action="#">
    <label for="numIp">number</label> <br>
    <input 
      id="numIp"
      type="number"
      min="0"
      max="10"
    >
    <br><br>

		<!-- 이 자제로는 사용하기 힘들다. JS와 연동해서 사용 -->
		<!-- step는 늘어나는 크기 -->
    <label for="rgIp">range</label> <br>
    <input
      id="rgIp"
      type="range"
      min="0"
      max="100"
      step="20"
    >
    <br><br>

    <label for="dtIp">date</label> <br>
    <input
      id="dtIp"
      type="date"
      min="2020-01-01"
      max="2030-12-31"
    >
    <br><br>

  </form>

  ```

 ![image](https://user-images.githubusercontent.com/60457431/183779153-d726cba8-d048-4253-9470-ee819ccec77e.png)
 
  <br><br>


### 체크 관련 인풋 타입

![image](https://user-images.githubusercontent.com/60457431/183779188-08dfab64-09eb-48c0-84b2-7b0811fe9ef6.png) 

``` html 
	<h1>체크 관련 인풋 타입</h1>
	<!-- label이 뒤로 쓰는것이 다르다. -->
	<!-- [checked] 이게 없으면 체크가 표시 되지 않는다. -->
  <form action="#">
    <h2>checkbox</h2>
    <input 
      id="cbIp"
      type="checkbox"
      checked
    >
    <label for="cbIp">유기농</label> <br>

    <h2>radio</h2>
    <input
      type="radio"
      name="fruit"
      id="f_apple"
      value="apple"
      checked
    >
    <label for="f_apple">사과</label>
    <input
      type="radio"
      name="fruit"
      id="f_grape"
      value="grape"
    >
    <label for="f_grape">포도</label>
    <input
      type="radio"
      name="fruit"
      id="f_orange"
      value="orange"
    >
    <label for="f_orange">오렌지</label>
    <br>

    <input
      type="radio"
      name="vege"
      id="v_carrot"
      value="carrot"
      checked
    >
    <label for="v_carrot">당근</label>
    <input
      type="radio"
      name="vege"
      id="v_tomato"
      value="tomato"
    >
    <label for="v_tomato">토마토</label>
    <input
      type="radio"
      name="vege"
      id="v_eggplant"
      value="eggplant"
    >
    <label for="v_eggplant">가지</label>

  </form>

```

  ![image](https://user-images.githubusercontent.com/60457431/183779223-507f994b-a4c0-420b-a346-468cd297e24a.png)
  
  <br><br>

  ### 기타 인풋 타입

![image](https://user-images.githubusercontent.com/60457431/183779255-c1a44cc0-ec68-4d83-a5a0-315716bab22a.png)

  
  ``` html 

	<h1>기타 인풋 타입</h1>

  <form action="#">
    <label for="fileIp">file</label> <br>
		<!-- accept로  받아들일 수 있는 파일 형식을 입력 -->
		<!-- 아무것도 입력하지 않으면 전부다 가져올수 있다. -->
		<!-- 참고 :  https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input/file#%EA%B3%A0%EC%9C%A0_%ED%8C%8C%EC%9D%BC_%EC%9C%A0%ED%98%95_%EC%A7%80%EC%A0%95%EC%9E%90-->
    <input 
      id="fileIp"
      type="file"
      accept="image/png, image/jpeg"
      multiple
    >
    <br><br>

    <label for="hdnIp">hidden</label> <br>
    <input
      id="hdnIp"
      type="hidden"
    >
  </form>

  <br><hr><br>

  <form action="#">
    <label for="emlIp">email</label> <br>
    <input 
      id="emlIp"
      type="email"
    >
    <br><br>

    <button type="submit">제출</button>
  </form>
</body>

  ```

 ![image](https://user-images.githubusercontent.com/60457431/183779280-f2b01166-fa7a-4aee-bbb2-c27f904e1c9d.png)
 
  <br><br>

# 0810
## 사용자로부터 입력 받기 3

### <textarea> 전용 속성들

![image](https://user-images.githubusercontent.com/60457431/184040952-325396c6-6aff-4c0e-b103-347d128b6dae.png)

``` html 
 <textarea name="" id="" cols="30" rows="10">두리두 입니다.</textarea>
  <br/>
  <br/>
  <br/>
  <textarea name="" id="" cols="30" rows="10" placeholder="두리두 입니다."></textarea>


```

![image](https://user-images.githubusercontent.com/60457431/184040991-3d254122-70e7-48e1-b6b1-010186b5461a.png)

### 옵션들을 사용하는 태그

![image](https://user-images.githubusercontent.com/60457431/184041016-c95e6f64-3a57-499c-8e78-3adde0804015.png) 

``` html 
<h1>옵션들을 사용하는 태그</h1>

  <h2>select, option 태그</h2>

  <label for="lang">언어</label> <br>
  <!-- value : 서버에 전송될 값들 -->
  
  <select id="lang" >
    <option value="">-- 언어 선택 --</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">자바스크립트</option>
    <option value="ts">타입스크립트</option>
  </select>

  <br><br>
  <!-- 셀렉트 그룹화 -->
  <h2>optgroup 태그</h2>

  <label for="shopping">쇼핑 목록</label> <br>
  <select id="shopping">
    <optgroup label="과일">
      <option value="f_apl">사과</option>
      <option value="f_grp">포도</option>
      <option value="f_org">오렌지</option>
    </optgroup>
    <optgroup label="채소">
      <option value="v_crt">당근</option>
      <option value="v_tmt">토마토</option>
      <option value="v_ept">가지</option>
    </optgroup>
    <optgroup label="육류">
      <option value="m_bef">소고기</option>
      <option value="m_prk">돼지고기</option>
      <option value="m_ckn">닭고기</option>
    </optgroup>
  </select>

  <br><br>

  <h2>datalist 태그</h2>

  <label for="job">현재 직업</label> <br>
  <!-- list와 id는 동일해야 한다. -->
  <input id="job" list="jobs">
  <datalist id="jobs">
    <option value="학생">
    <option value="디자이너">
    <option value="퍼블리셔">
    <option value="개발자">
  </datalist>

```
![image](https://user-images.githubusercontent.com/60457431/184041052-cea194d3-a5f8-4f5b-a93d-6ac89d18f623.png)

![image](https://user-images.githubusercontent.com/60457431/184041065-fbf76b3f-7266-4177-b8d5-56311f940fa7.png)

![image](https://user-images.githubusercontent.com/60457431/184041115-bda312a0-2bb5-4001-ba04-e90f98f52e8e.png)


### 정도를 표현하는 태그

![image](https://user-images.githubusercontent.com/60457431/184041136-96dd7650-7c20-4ed1-b7c7-84a13ffef5b2.png) 

``` html 
<h1>정도를 표현하는 태그</h1>
  <!-- 무언가 동적으로 움직일때 JS를 통해 사용 -->
  <h2>
    progress 태그
  </h2>
  <progress 
    id="progressBar" 
    max="100">
    0%
  </progress>
  <button id="prgStartBtn" type="button">시작</button>

  <h2>
    meter 태그
  </h2>
  <!-- 고정 되어있는 수치 -->
  <meter 
    min="0" max="100"
    low="33" high="67"
    optimum="50" value="20">
    20달러
  </meter>

  <meter 
    min="0" max="100"
    low="33" high="67"
    optimum="50" value="50">
    50달러
  </meter>

  <meter 
    min="0" max="100"
    low="33" high="67"
    optimum="50" value="80">
    80달러
  </meter>

```

![image](https://user-images.githubusercontent.com/60457431/184041155-29999b53-6e06-4f52-9333-d41479890377.png)
