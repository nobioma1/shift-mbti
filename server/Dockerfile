FROM node:15-alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

FROM node:15-alpine
WORKDIR /app
COPY --from=build /app/build /app
COPY package.json /app/package.json
RUN npm install --only=prod

CMD ["npm", "start"]