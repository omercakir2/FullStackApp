FROM python:3.11-slim

# Gerekli sistem kütüphaneleri
RUN apt-get update && apt-get install -y libpq-dev gcc

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Django'nun çalışması için
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
