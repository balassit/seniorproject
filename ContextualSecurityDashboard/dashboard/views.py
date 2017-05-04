from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from dashboard.models import Report
from dashboard.serializers import ReportSerializer
from .models import Module
from .serializers import ModuleSerializer
import django_filters
from rest_framework import viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.renderers import JSONRenderer
import requests
import urllib

#Viewset for reports
class ReportViewSet(viewsets.ModelViewSet):
  queryset = Report.objects.all()
  serializer_class = ReportSerializer
  filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
  filter_fields = ('id', 'title','module', 'severity', 'status', 'date')
  ordering_fields = '__all__'
  ordering = ('title',)

  def create(self, request):
    #Check for new module
    moduleName = request.data[0]["module"]
    modulesWithName = Module.objects.filter(module=moduleName)
    if not modulesWithName:
      newModule = Module(module=moduleName)
      newModule.save()

    #Add the reports to the database
    serializer = ReportSerializer(data=request.data, many=True)
    if serializer.is_valid():
      serializer.save()
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

#Viewset for reports
class ModuleViewSet(viewsets.ModelViewSet):
  queryset = Module.objects.all()
  serializer_class = ModuleSerializer
  filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
  filter_fields = ('module',)
  ordering_fields = ('module',)
  ordering = ('module',)
  renderer_classes = (JSONRenderer, )
  pagination_class = None

# homepage view
def index(request):
  return HttpResponse("This will be our dashboard page.")
