FROM node:15.4.0-alpine3.10

WORKDIR /client

COPY package*.json /client/

RUN npm install --silent

COPY . /client/

EXPOSE 1234

CMD ["npm", "start"]