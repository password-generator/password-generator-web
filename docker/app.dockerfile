FROM node:14-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN yarn install
