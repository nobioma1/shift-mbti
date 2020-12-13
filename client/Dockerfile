FROM node:15-alpine

WORKDIR /client

COPY package*.json /client/

RUN npm install --silent

COPY . /client/

EXPOSE 1234

CMD ["npm", "start"]