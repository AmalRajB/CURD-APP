
from django.urls import path
from .views import displaydata_api,api_signup,CustomTokenObtainPairView,CustomTokenRefreshView,logout_api
urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('getdata/',displaydata_api),
    path('signup/',api_signup),
    path('logout/',logout_api),
    
]