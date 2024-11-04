FROM cypress/base:16
WORKDIR /app

COPY cypress.json ./
COPY package.json .

RUN yarn
RUN npx cypress verify
