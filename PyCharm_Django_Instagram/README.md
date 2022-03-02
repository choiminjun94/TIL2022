# Django Study 
## 0301 
###  장고의 특징
Python을 프로젝트를 만드때 가상환경을 만들고 내가 필요한 패키지를 설치하고 다른 가상환경과 독립적으로 운영이 가능하다. 

프로젝트를 만들때 [Virtualenv]라는 것을 사용한다. - Vscode에서 할시에도 설치 해야 하고 [venv]라고 명한다. 

프로젝트 생성시 프로젝트를 Location를 정해 주면 그 위에 venv 가상환경 폴더가 만들어서 그 위에 파이썬 버전에 따른 셋팅이 설정 된다.

장고는 MVT 구조이다 .
Model
View - 컨트롤러 역할 (데이터 처리)
Template - 화면 보이는 역할  (HTML, CSS 같은것)

manage.py - 장고를 관리는 역할 

urls.py - 장고에서 브라우저의 흐름은 
views.py - 를 만들고 drf Django-Rest-Framework를 만들어 줘야 한다. (설치) ( Rest를 지원 - 찾아보기)

### drf Django-Rest-Framework install

> pip install djangorestframework

#### 오류 해결
- drf Django-Rest-Framework를 설치 하려고 콘솔에 들어 갔는데 (venv) 즉 가상환경 위에 있어야 하는데 없으면 가상환경으로 들어가야 한다. 
- cd venv -> cd Scripts 하고 activate.bat를 입력 
- 보통은 이렇게 하면 되지만 
- uggestion [3,General]: activate.bat 명령이 현재 위치에 있지만 이 명령을 찾을 수 없습니다. Windows PowerShell은 기본적으로 현재 위치에서 명령을 로드하지 않습니다. 이 명령을 신뢰하는 경우 대신 ".\activate.bat"을(를) 입력하십시오. 자 세한 내용은 "get-help about_Command_Precedence"를 참조하십시오.
- 이런 오류가 발생 하면 .\activate를 입력 

## 0302

폴더 생성 - Root 폴더에서 python manage.py startapp [폴더이름]

앱단위로 하는 이유 : 여러 소스 파일을 분할해서 관리 ( 댓글, 게시물, 좋아요 관련 이런것 ) 
탬플릿도 탬플릿 안에 앱 이름으로 구분을 하고 그안에 HTML을 넣는게 일반적인 장고

