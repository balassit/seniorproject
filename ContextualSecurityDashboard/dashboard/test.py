from django.test import TestCase
from django.contrib import admin
from django.core.urlresolvers import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient
from rest_framework.test import force_authenticate
import json
import unittest
import django
from django.test import Client

from .models import Report
from .models import Module
from .serializers import ReportSerializer

class ReportTests(APITestCase):
    @classmethod
    def setUp(self):
        self.client = APIClient()
        self.factory = APIRequestFactory()
#        self.superuser, creaed = User.objects.\
#            get_or_create{
#                username="test-admin",
#            }
#        self.superuser.is_active = True
#        self.superuser.is_superuser = True
#        self.superuser.save()


    #Post a report to the database with no content in data field    
    def test_create_report_allowed(self):
        # login
 #       self.client.force_authenticate(user=self.superuser)
        
        url = '/dashboard/api/reports/'
        data = [
            {
            "module": "Trinity",
            "severity": 1,
            "title": "The Matrix",
            "data": {}
            }
        ] 

        self.assertEqual(Report.objects.count(), 0)
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Report.objects.count(), 1)

        # logout
#        self.client.force_authenticate(user=None)
    
    # Post a report then delete it
    def test_delete_report(self):
        url = '/dashboard/api/reports/'
        data = [
             {
             "module": "Trinity",
             "severity": 1,
             "title": "The Matrix 2",
             "data": {}
             }
         ]

        self.assertEqual(Report.objects.count(), 0)
        #post data
        responsePost = self.client.post(url, data, format="json")
        self.assertEqual(responsePost.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Report.objects.count(), 1)
        #delete data
        url = '/dashboard/api/reports/'
        #get the posted report 
        response = self.client.get(url, format="json")
        response_data = json.loads(response.content)
        self.assertEqual("The Matrix 2", response_data['results'][0]['title'])
        #append id of report
        url = '/dashboard/api/reports/' + str(response_data['results'][0]['id']) + '/'
        response = self.client.delete(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Report.objects.count(), 0)

    #Post 2 reports of the same module at once
    #Get both of the reports
    def test_post_two_reports(self):
        url = '/dashboard/api/reports/'
        data = [
             {
             "module": "Atrium",
             "severity": 3,
             "title": "Howling Cow",
             "data": {}
             },
             {
             "module": "Atrium",
             "severity": 2,
             "title": "Brickyard",
             "data": {}
             }
         ]

        self.assertEqual(Report.objects.count(), 0)

        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        self.assertEqual(Report.objects.count(), 2)
        
        url = '/dashboard/api/reports/'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    #Get report by ID
    #Post 2 reports with different modules at same time
    def test_get_reports(self):
        self.assertEqual(Report.objects.count(), 0)
        #post 2 reports
        url = '/dashboard/api/reports/'
        data = [
             {
             "module": "Hillsborough",
             "severity": 3,
             "title": "Airplane",
             "data": {}
             },
             {
             "module": "Talley",
             "severity": 2,
             "title": "Helicopter",
             "data": {}
             }
         ]
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        self.assertEqual(Report.objects.count(), 2)
        #Get report with id 3
        
        url = '/dashboard/api/reports/'
        #Get report
        response = self.client.get(url, format="json")
        response_data = json.loads(response.content)
        self.assertEqual("Airplane", response_data['results'][0]['title'])
        #append id of report to url
        url = '/dashboard/api/reports/' + str(response_data['results'][0]['id']) + '/'
        #Get report by id
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(str(response.data["title"]), "Airplane")
        self.assertEqual(str(response.data["module"]), "Hillsborough")
        
        #filter for id
        url = '/dashboard/api/reports/?id=' + str(response_data['results'][0]['id'])
        response = self.client.get(url, format="json")
        response_filter = json.loads(response.content)
        self.assertEqual(response_data['results'][0], response_filter['results'][0])
        #Get next report
        self.assertEqual("Helicopter", response_data['results'][1]['title'])
        url = '/dashboard/api/reports/' + str(response_data['results'][1]['id']) + '/'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(str(response.data["title"]), "Helicopter")
        self.assertEqual(str(response.data["module"]), "Talley")

    #Post report with invalid severity
    #Post report with empty title
    #Post report with empty module
    #Post report with data field filled

    #Get reports based on filter (no filter)

class ReportFilterTests(APITestCase):
    @classmethod
    def setUp(self):
        self.client = APIClient()
        self.factory = APIRequestFactory()
#        self.superuser, creaed = User.objects.\
#            get_or_create{
#                username="test-admin",
#            }
#        self.superuser.is_active = True
#        self.superuser.is_superuser = True
#        self.superuser.save()

    #Get reports with no filter
    def test_get_filtered_reports(self):
        self.assertEqual(Report.objects.count(), 0)
        url = '/dashboard/api/reports/'
        data = [
             {
             "module": "Zeta",
             "severity": 1,
             "title": "B is for Burglar",
             "data": {}
             },
             {
             "module": "Alpha",
             "severity": 2,
             "title": "Z is for Zumba",
             "data": {}
             },
             {
             "module": "Beta",
             "severity": 3,
             "title": "A is for Alibi",
             "data": {}
             },

        ]
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Report.objects.count(), 3)

        url = '/dashboard/api/reports/'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_data = json.loads(response.content)

        self.assertEqual("B is for Burglar", response_data['results'][0]['title'])
        self.assertEqual("Zeta", response_data['results'][0]['module'])
        self.assertEqual(1, response_data['results'][0]['severity'])
        self.assertEqual({}, response_data['results'][0]['data'])

        self.assertEqual("Z is for Zumba", response_data['results'][1]['title'])
        self.assertEqual("Alpha", response_data['results'][1]['module'])
        self.assertEqual(2, response_data['results'][1]['severity'])
        self.assertEqual({}, response_data['results'][1]['data'])

        self.assertEqual("A is for Alibi", response_data['results'][2]['title'])
        self.assertEqual("Beta", response_data['results'][2]['module'])
        self.assertEqual(3, response_data['results'][2]['severity'])
        self.assertEqual({}, response_data['results'][2]['data'])

        #Filter by module. First result is now Alpha module
        url = '/dashboard/api/reports/?module=Alpha'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_data = json.loads(response.content)
        self.assertEqual("Z is for Zumba", response_data['results'][0]['title'])
        self.assertEqual("Alpha", response_data['results'][0]['module'])
        self.assertEqual(2, response_data['results'][0]['severity'])
        self.assertEqual({}, response_data['results'][0]['data'])
 
        #Filter by title. First result is now A is Alibi title
        url = '/dashboard/api/reports/?title=A is for Alibi'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_data = json.loads(response.content)
        self.assertEqual("A is for Alibi", response_data['results'][0]['title'])
        self.assertEqual("Beta", response_data['results'][0]['module'])
        self.assertEqual(3, response_data['results'][0]['severity'])
        self.assertEqual({}, response_data['results'][0]['data'])

        #Filter by severity. First result is now 1 severity
        url = '/dashboard/api/reports/?severity=1'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_data = json.loads(response.content)
        self.assertEqual("B is for Burglar", response_data['results'][0]['title'])
        self.assertEqual("Zeta", response_data['results'][0]['module'])
        self.assertEqual(1, response_data['results'][0]['severity'])
        self.assertEqual({}, response_data['results'][0]['data'])

        #Filter by status. All results show with U as status
        url = '/dashboard/api/reports/?status=U'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_data = json.loads(response.content)
        self.assertEqual("B is for Burglar", response_data['results'][0]['title'])
        self.assertEqual("U", response_data['results'][0]['status'])

        self.assertEqual("Z is for Zumba", response_data['results'][1]['title'])
        self.assertEqual("U", response_data['results'][1]['status'])

        self.assertEqual("A is for Alibi", response_data['results'][2]['title'])
        self.assertEqual("U", response_data['results'][2]['status'])

 
    #Get reports based on filter for status
    #- GET /dashboard/api/reports/?status=F/V

class FailTestCases(APITestCase):
    #Get for empty string module
    #Get for empty string title
    #Post with no title/module/severity/data
    @classmethod
    def setUp(self):
        self.client = APIClient()
        self.factory = APIRequestFactory()
#        self.superuser, creaed = User.objects.\
#            get_or_create{
#                username="test-admin",
#            }
#        self.superuser.is_active = True
#        self.superuser.is_superuser = True
#        self.superuser.save()

    def test_get_no_report(self):
        url = '/dashboard/api/reports/'
        response = self.client.get(url, format="json")
        self.assertEqual(Report.objects.count(), 0)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        #does not exist
        url = '/dashboard/api/reports/1/'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_delete_no_report(self):
        #does not exist
        url = '/dashboard/api/reports/1/'
        response = self.client.delete(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
 
    def test_filter_by_serverity_invalid(self):
        self.assertEqual(Report.objects.count(), 0)
        url = '/dashboard/api/reports/'
        data = [
             {
             "module": "Carthage",
             "severity": 1,
             "title": "C is for Carrier",
             "data": {}
             }
        ]
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Report.objects.count(), 1)
        
        url = '/dashboard/api/reports/?severity=4'
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_data = json.loads(response.content)
        self.assertEqual([], response_data['results'])
    
    def test_bad_posts(self):
        url = '/dashboard/api/reports/'
        #empty module
        data_module = [
            {
            "module": "",
            "severity": 2,
            "title": "test module",
            "data": {
                
                }
            }
        ]
        #empty severity
        data_severity = [
            {
            "module": "test",
            "severity": "",
            "title": "test module 2",
            "data": {
                
                }
            }
        ]
        
        #empty title
        data_title = [
            {
            "module": "test 2",
            "severity": 3,
            "title": "",
            "data": {
                
                }
            }
        ]

        #out of bounds severity
        data_severity_big = [
            {
            "module": "test 2",
            "severity": 5,
            "title": "Severity too big",
            "data": {

                }
            }
        ]


        response = self.client.post(url, data_module, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        response = self.client.post(url, data_severity, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        response = self.client.post(url, data_title, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        response = self.client.post(url, data_severity_big, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

