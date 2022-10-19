
FROM node:14.18

WORKDIR /usr/src/server

COPY package.json .

RUN npm install

RUN npm install -g typeorm

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:dev"]