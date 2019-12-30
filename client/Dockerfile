FROM node:12.14.0-alpine3.9

COPY ./ /client

WORKDIR /client

RUN npm install axios --save

RUN npm install

EXPOSE 8080