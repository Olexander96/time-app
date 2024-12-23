FROM node:alpine

WORKDIR /app

EXPOSE 5000
# копіюємо package.json, package-lock.json в корінь образа
COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "run", "dev" ]