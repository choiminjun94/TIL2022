from django.shortcuts import render
from rest_framework.views import APIView


class Sub(APIView):
    # get으로 호출 시 이것
    def get(self, request):
        return render(request, "Instagram/main.html")

    # post로 호출 시 이것
    def post(self, request):
        return render(request, "Instagram/main.html")
