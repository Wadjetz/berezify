FROM node:14.8.0-alpine

COPY . /berezify

WORKDIR /berezify

RUN npm install

CMD npm start
