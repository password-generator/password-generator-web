FROM node:14-slim
WORKDIR /app

COPY . .

RUN yarn
