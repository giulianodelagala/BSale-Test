from django.urls import include, path
from rest_framework import routers, urlpatterns
from . import views

from .views import ProductList

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
# router.register(r'category', views.PersonViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
    path('list/', ProductList.as_view(), name='postsearch')
    # path('api-auth/', include('rest_framework.urls',
    #     namespace='rest_framework')),
]