from django.shortcuts import render
from rest_framework import viewsets, pagination, generics, filters

# Create your views here.

from .serializers import ProductSerializer, CategorySerializer
from .models import Product

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