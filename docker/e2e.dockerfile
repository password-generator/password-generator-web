FROM cypress/base

WORKDIR /app

COPY cypress.json ./

RUN npx cypress verify