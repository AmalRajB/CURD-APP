from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from django.urls import path
from .views import displaydata_api,api_signup,api_login,CustomTokenObtainPairView
urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('getdata/',displaydata_api),
    path('signup/',api_signup),
    path('login/',api_login),
    
]