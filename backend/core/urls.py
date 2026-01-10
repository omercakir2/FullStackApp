from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

# Test fonksiyonu
def api_test(request):
    return JsonResponse({
        "durum": "Basarili",
        "mesaj": "Django API'den selamlar!",
        "teknoloji": ["Django", "React", "Docker", "PostgreSQL"]
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/test/', api_test), # Bu adrese istek atacagiz
]