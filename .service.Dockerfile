FROM mhart/alpine-node:10

WORKDIR /usr

# COPY package.json .
# COPY yarn.lock .
# COPY .env .
# COPY prisma.yml . 
# COPY .wait-for-it.sh .
# COPY src/ ./src/ 

COPY . .

RUN apk add --no-cache bash #Need this for alpine-node
RUN yarn global add concurrently
RUN yarn global add prisma
RUN chmod +x ./.wait-for-it.sh
RUN yarn install

EXPOSE 4000
