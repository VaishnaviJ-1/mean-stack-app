# Use the official lightweight Node.js 12 image.

# https://hub.docker.com/_/node

FROM node:17-slim



WORKDIR /usr/app

COPY ./ /usr/app



RUN npm install

# Run the web service on container startup.

CMD ["npm", "start"]
