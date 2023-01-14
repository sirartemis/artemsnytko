FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN yarn ci 

RUN yarn build

CMD ["yarn","start"]