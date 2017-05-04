from django.test import TestCase
from django.contrib import admin
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient
from django.test.client import RequestFactory

from .models import Report
from .models import Module
from .serializers import ReportSerializer

class TestPut(RequestFactory):

def test_1(self):
    factory = RequestFactory()
    url = '/dashboard/reports/'
    data = [
        {
        "module": "module data",
        "severity": 1,
        "title": "title data"
        }
    ]
    request = factory.post(url, data, format='json')
