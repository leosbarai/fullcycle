FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-audit --progress=false

COPY . .

ENV DOCKERIZE_VERSION v0.6.1

RUN apk add --no-cache wget \
  && wget https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-alpine-linux-amd64-${DOCKERIZE_VERSION}.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-${DOCKERIZE_VERSION}.tar.gz \
  && rm dockerize-alpine-linux-amd64-${DOCKERIZE_VERSION}.tar.gz

EXPOSE 3000

CMD ["node", "index.js"]
