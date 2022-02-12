FROM node:lts-alpine3.14
RUN apk update && apk add git
WORKDIR /usr/src/app