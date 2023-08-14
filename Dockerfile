FROM node:18-alpine as runner

WORKDIR /app
COPY . .

RUN npm install 
EXPOSE 5000

CMD [ "npm","start" ]


