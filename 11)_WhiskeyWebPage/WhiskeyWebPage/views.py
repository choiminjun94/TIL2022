from django.shortcuts import render
from rest_framework.views import APIView


class Sub(APIView):
    def get(self, request):
        print("Get으로 호출")
        return render(request, "mainPage/main.html")

    def post(self, request):
        print("post로 호출")
        return render(request, "mainPage/main.html")