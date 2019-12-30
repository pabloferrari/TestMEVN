FROM node:12.14.0-alpine3.9

COPY ./ /app

WORKDIR /app

RUN npm install -g nodemon

RUN npm install

ENV URI=mongodb://mongo:27017/mydb

EXPOSE 3000

# CMD [ "npm", "start" ]
