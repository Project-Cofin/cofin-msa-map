from django.db import models


class HealthStatus(models.Model):
    use_in_migrations = True
    id = models.CharField(primary_key=True, max_length=10)
    # fever: 열, local_pain: 접종부위 통증, swelling: 접종부위 붓기, sickness: 매스꺼움
    # pain: 두통, 관절통, 근육통, fatigue: 피로감, allergy: 알레르기 반응 
    fever = models.FloatField(max_length=10)
    local_pain = models.TextField()
    swelling = models.TextField()
    sickness = models.TextField()
    pain = models.TextField()
    fatigue = models.TextField()
    allergy = models.TextField()
    user_id = models.ForeignKey()

    class Meta:
        db_table = "health_status"

    def __str__(self):
        return f'[{self.pk}] {self.id}'