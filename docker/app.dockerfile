FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN apk add --no-cache git
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent