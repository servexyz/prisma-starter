FROM mhart/alpine-node:10

WORKDIR /usr/src

COPY package.json .
COPY yarn.lock .
COPY src/database/prisma.yml .
COPY src/database/seed.graphql .
COPY src/database/datamodel.graphql .
COPY .env .
COPY .wait-for-it.sh .

RUN apk add --no-cache bash #Need this for alpine-node
RUN yarn global add concurrently
RUN yarn global add prisma
RUN chmod +x ./.wait-for-it.sh
RUN yarn install

COPY src/service/ ./service/

EXPOSE 4000
