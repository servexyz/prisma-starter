FROM node:10

WORKDIR /usr/src

COPY src/package.json .
COPY src/yarn.lock .
COPY .env .

RUN yarn install

COPY src/service/ ./service/

EXPOSE 4000
CMD ["yarn", "start"]
