from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import authentication, permissions
from . models import *
from .serializers import Addsomethingsetializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST,HTTP_404_NOT_FOUND
import re


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self,request, *args, **kwargs):

        try:
            response = super().post(request, *args, **kwargs)
            tokens = response.data

            access_token = tokens['access']
            refresh_token = tokens['refresh']

            res = Response()

            res.data = {'success':True}

            res.set_cookie(
                key="access_token",
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'

            )

            res.set_cookie(
                key="refresh_token",
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'

            )
            return res
        
        except:    
            return Response({'success':False})















@api_view(['GET'])
@permission_classes([IsAuthenticated])
def displaydata_api(request):
    user = request.user
    data = Addsomething.objects.filter(user = user)
    serializer = Addsomethingsetializer(data, many = True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def api_signup(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response('email and password fields are needed')
    
    email_regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if not re.match(email_regex, email):
        return Response(
        {"message": "Invalid email format"},
        status=HTTP_400_BAD_REQUEST
    )

    if len(password) < 8:
        return Response(
        {"message": "Password must be at least 8 characters"},
        status=HTTP_400_BAD_REQUEST
    )

    if User.objects.filter(email = email).exists():
        return Response("the email is already exist user another one..")
    user = User.objects.create_user(email=email , password=password)
    user.save()
    return Response('user created successfully', status=HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def api_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    if not email or not password:
        return Response('email and password fields are needed')
    user = authentication(email=email,password=password)
    if not user:
        return Response('invalid credentials',status=HTTP_404_NOT_FOUND)
    

