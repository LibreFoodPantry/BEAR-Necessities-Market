# base image
FROM python:3.7.2-alpine

RUN /bin/sh -c "apk add python-dev"
RUN /bin/sh -c "apk add --no-cache bash"

# set working directory
WORKDIR /usr/src/app

# add and install requirements
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# add app
COPY . /usr/src/app

# run server
CMD python manage.py run -h 0.0.0.0
