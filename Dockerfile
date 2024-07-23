# Stage 1: Build the Angular application
FROM node:alpine as build
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
COPY . /usr/src/app
RUN npm run build --prod

# Stage 2: Serve the application with nginx server
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /usr/src/app/dist/todo . 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]