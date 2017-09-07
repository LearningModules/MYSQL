FROM node:boron
RUN apt-get update && apt-get install telnet && apt-get install nano
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]





