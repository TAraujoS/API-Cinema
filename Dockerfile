FROM node:16.16.0

WORKDIR /app

COPY package.json /app/

RUN yarn

COPY . /app/