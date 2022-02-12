FROM node:lts-alpine3.14
RUN apk update && apk add git
RUN git config --global user.email "r.uetani33@gmail.com" && git config --global user.name "ryotauetani1221"
WORKDIR /usr/src/app