FROM python:3.6

ADD . /app
WORKDIR /app

EXPOSE 80
RUN pip install -r requirements.txt

ENTRYPOINT ["python","backend/index.py"]