from __future__ import unicode_literals
from rest_framework import serializers
from django.utils import timezone

from django.db import models

from django.contrib.postgres.fields import JSONField
# Create your models here.

class Report(models.Model):
  STATUSES = (
    ('U', 'Unseen'),
    ('V', 'Viewed'),
    ('F', 'Fixed'),
  )
  module = models.CharField(max_length=200)
  severity = models.IntegerField()
  status = models.CharField(max_length=1, choices=STATUSES, default='U')
  comment = models.CharField(max_length=10000, blank=True)
  title = models.CharField(max_length=200)
  date = models.DateTimeField(blank=True, default=timezone.now)

class Module(models.Model):
  module = models.CharField(max_length=200, blank=True)
