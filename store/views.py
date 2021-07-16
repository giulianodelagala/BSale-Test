from django.shortcuts import render
from rest_framework import viewsets, pagination, generics

# Create your views here.

from .serializers import ProductSerializer, CategorySerializer
from .models import Product
from store import serializers

class ProductPagination(pagination.PageNumberPagination):
    page_size = 12

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagination