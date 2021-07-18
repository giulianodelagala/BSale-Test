from django.shortcuts import render
from rest_framework import viewsets, pagination, generics, filters
from django_filters.rest_framework import DjangoFilterBackend


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

class ProductList(generics.ListAPIView):
    pagination_class = ProductPagination
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$name']