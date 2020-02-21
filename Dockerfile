# set the base image
# This is the application image from which 
# all other subsequent applications run
FROM node:latest
# set working directory
# this is the working folder in the container 
# from which the app will be running from
# create a working directory called '/app' if does not exist
# otherwise using the cache
WORKDIR /app
# add package.json and package-lock.json
# docker will know whether the contents of package.json and package-lock.json changed
# if it does, docker will recompute everything all over again
# otherwise, docker will skip step 3 4 5, and just use cache
ADD package.json /app/package.json
ADD package-lock.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]
