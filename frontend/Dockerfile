FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

# CMD ["sh", "-c", "while true; do sleep 1000; done"]

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
