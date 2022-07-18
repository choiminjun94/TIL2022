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

