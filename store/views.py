from django.shortcuts import render
from rest_framework import viewsets, pagination, generics, filters

# Create your views here.

from .serializers import CategorySerializer, ProductSerializer, GroupSerializer
from .models import Product, Category

class GroupPagination(pagination.PageNumberPagination):
    page_size = 1

class ProductPagination(pagination.PageNumberPagination):
    page_size = 12

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagination

class ProductList(generics.ListAPIView):
    model = Product
    pagination_class = ProductPagination
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['$name']

    def get_queryset(self):
        try:
            cat_id = int(self.kwargs['category_id'])
            return Product.objects.filter(category_id = cat_id)
        except:
            return Product.objects.all().order_by('category_id')

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = GroupSerializer
    pagination_class = GroupPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['$name']

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
