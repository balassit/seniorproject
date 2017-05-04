from .models import Report
from .models import Module

from rest_framework import serializers

class ReportSerializer(serializers.ModelSerializer):
	def __init__(self, *args, **kwargs):
		many = kwargs.pop('many', True)
		super(ReportSerializer, self).__init__(many=many, *args, **kwargs)

	class Meta:
		model = Report
		include = ('module', 'severity', 'title')
		fields = '__all__'

class ModuleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Module
		include = ('module',)
		exclude = ('id',)
