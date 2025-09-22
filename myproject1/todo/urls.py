from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='todo_index'),
    path('toggle/<int:todo_id>/', views.toggle_complete, name='toggle_todo'),
    path('delete/<int:todo_id>/', views.delete_todo, name='delete_todo'),
]
