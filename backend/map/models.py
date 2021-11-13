from django.db import models


class Map(models.Model):
    use_in_migrations = True
    # type - l(local), w(world)
    # name - med_point_name Or world_name, address - detail_med_point
    type = models.CharField(max_length=4)
    name = models.TextField()
    address = models.TextField()
    lat = models.TextField()
    long = models.TextField()
    total = models.IntegerField()
    infected = models.IntegerField()
    med_point_id = models.ForeignKey(null=True)

    class Meta:
        db_table = "maps"

    def __str__(self):
        return f'[{self.pk}] {self.id}'