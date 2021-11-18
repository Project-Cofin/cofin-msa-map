# Generated by Django 3.2.5 on 2021-11-18 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0013_auto_20211118_1418'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='map',
            name='lat',
        ),
        migrations.RemoveField(
            model_name='map',
            name='long',
        ),
        migrations.AddField(
            model_name='map',
            name='map_lat',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='map',
            name='map_long',
            field=models.FloatField(null=True),
        ),
    ]
