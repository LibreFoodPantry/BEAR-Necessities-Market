FROM python:3.6

ENV FLASK_APP /app/backend/index.py

RUN mkdir /app
WORKDIR /app
COPY . /app/

EXPOSE 80

RUN pip install -r requirements.txt

ENTRYPOINT ["python","backend/index.py"]
