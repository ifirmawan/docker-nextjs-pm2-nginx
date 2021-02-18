# base on official nodejs Alpine image
FROM node:alpine

# set working directory
WORKDIR /usr/app

# install PM2 globally
RUN npm install --global pm2

# copy package.json and package-lock.json before other files
COPY ./package*.json ./

# install dependencies
RUN npm install --production

# Copy all files
COPY ./ ./

# build app
RUN npm run build

# expose the listing port
EXPOSE 3000

# run container as non-root (unprivileges) user

USER node

# run npm start script when container starts
CMD [ "npm", "start" ]