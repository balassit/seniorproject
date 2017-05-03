from django.conf.urls import url
from . import views
from .views import ReportViewSet
from .views import ModuleViewSet
from rest_framework.routers import DefaultRouter
from django.conf.urls import include

router = DefaultRouter()
router.register(r'reports', ReportViewSet)
router.register(r'modules', ModuleViewSet)
urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^api/', include(router.urls)),
]
'''
report_list = ReportViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

module_list = ModuleViewSet.as_view({
    'get': 'list',
    'post': 'create'
})


report_detail = ReportViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

#urlpatterns = [
#    url(r'^api/reports/$', report_list, name='report-filter'),  
#    url(r'^api/reportFilter/$', views.ReportViewSet.as_view()),
#    url(r'^api/reports/$', views.reportList),
#    url(r'^api/reports/(?P<pk>[0-9]+)/$', views.itemDetail),
#    url(r'^api/modules/$', module_list, name='module-list'),
#]
'''
