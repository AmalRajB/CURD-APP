from rest_framework import serializers
from .models import Addsomething

class Addsomethingsetializer(serializers.ModelSerializer):
    class Meta:
        model = Addsomething
        fields = '__all__'