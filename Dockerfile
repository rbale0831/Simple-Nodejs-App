#Base image
FROM node:18.9.1

#Create a Node Environament
ENV NODE_ENV=production

#Install app dependencies
COPY package*.json ./

#Run npm install in production env
RUN npm install --production

#Bundle app source
COPY . .

EXPOSE 8888

CMD [ "npm", "start" ]