FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# CMD ["sh", "-c", "while true; do sleep 1000; done"]

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

