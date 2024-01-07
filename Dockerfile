FROM node:21

#Install pm2
RUN yarn global add pm2;

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /home/app/site

# Copying source files
COPY . .

# Build image
RUN yarn install; \
    yarn build;

EXPOSE 3000