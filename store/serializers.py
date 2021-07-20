from django.db import models
from django.db.models import fields
from rest_framework import serializers

from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name']
        

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many = False)
    # category = serializers.StringRelatedField(many = False) 

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'url_image',
            'price',
            'discount',
            'category'
        ]

class GroupSerializer(serializers.ModelSerializer):

    def to_representation(self, data):
        rep = { data.name : [prod for prod in Product.objects.filter(category_id=data.id).values()] }
        return rep

    class Meta:
        model = Product
        fields = '__all__'

