# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-10-24 13:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0009_auto_20161011_0244'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='report',
            name='status',
        ),
        migrations.AddField(
            model_name='report',
            name='acknowledged',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='report',
            name='comment',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='report',
            name='module',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='report',
            name='severity',
            field=models.CharField(blank=True, max_length=2),
        ),
    ]