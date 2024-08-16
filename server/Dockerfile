FROM node:20-alpine

WORKDIR /app

RUN npm install -g vite

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]