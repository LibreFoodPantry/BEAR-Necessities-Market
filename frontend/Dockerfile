FROM node:8
RUN npm install -g yarn
RUN touch yarn.lock

ADD package.json /package.json

RUN yarn install

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR /frontend/app
ADD . /frontend/app

EXPOSE 3000

RUN yarn build
