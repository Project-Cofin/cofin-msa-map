from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class MedPoint(models.Model):
    use_in_migrations = True
    med_point_name = models.TextField()

    class Meta:
        db_table = "medpoint"

    def __str__(self):
        return f'[{self.pk}] {self.id}'


class Map(models.Model):
    use_in_migrations = True
    # type - l(local), w(world)
    # name - med_point_name Or world_name, address - detail_med_point
    type = models.CharField(max_length=10)
    short_name = models.TextField()
    name = models.TextField()
    lat = models.TextField()
    long = models.TextField()
    population = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(30)])
    cases = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(20)])
    med_point_id = models.ForeignKey(MedPoint, on_delete=models.CASCADE, null=True)

    class Meta:
        db_table = "maps"

    def __str__(self):
        return f'[{self.pk}] {self.id}'