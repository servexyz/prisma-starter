FROM node:10

WORKDIR /usr/src

COPY src/package.json .
COPY src/yarn.lock .
COPY .env .
COPY wait-for-it.sh .

RUN npm install -g prisma
RUN chmod +x ./wait-for-it.sh
RUN yarn install

COPY src/service/ ./service/

EXPOSE 4000
