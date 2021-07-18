from django.urls import include, path
from rest_framework import routers, urlpatterns
from . import views

from .views import ProductList

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
    path('list/', ProductList.as_view(), name='postsearch')
]