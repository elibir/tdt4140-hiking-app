from django.db import models
from django.utils.timezone import now

from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    where = models.CharField(max_length=30)
    duedate = models.DateField(null=True, blank=True)
    difficulty = models.PositiveSmallIntegerField(choices=((1, "Lett"), (2, "Moderat"), (3, "Vanskelig")))
    capacity = models.PositiveSmallIntegerField()
    #created_at = models.DateTimeField(default=now, editable=False, null=True)

    owner = models.ForeignKey('auth.User', related_name="events", on_delete=models.CASCADE, null=True)
    highlighted = models.TextField()

    def save(self, *args, **kwargs):
        """
        Use the `pygments` library to create a highlighted HTML
        representation of the code event.
        """

        lexer = get_lexer_by_name(self.language)
        linenos = 'table' if self.linenos else False
        options = {'title': self.title} if self.title else {}
        formatter = HtmlFormatter(style=self.style, linenos=linenos, full=True, **options)
        self.highlighted = highlight(self.code, lexer, formatter)
        super().save(*args, **kwargs)


    def __str__(self):
        return self.name

    

