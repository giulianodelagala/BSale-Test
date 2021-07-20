from django.urls import include, path
from rest_framework import routers, urlpatterns
from . import views

from .views import ProductList

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'groups', views.GroupViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
    # Pagination
    path('list/', ProductList.as_view(), name='postsearch'),
    path('list/<int:category_id>/', ProductList.as_view()),
]