"""PyCharm_Django_Instagram URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

# views에서 만든 sub를 클래스 가져온다.
from .views import Sub

urlpatterns = [
    path('admin/', admin.site.urls),

    # url 뒤에 아무것도 없을 떄
    # 먼가를 실행 해야 하는것은 views.py에서 views에서 sub라는 클래스를 호출
    # url -> views.py -> main.html
    path('', Sub.as_view())
]
