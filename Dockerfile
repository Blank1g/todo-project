FROM node:alpine as build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application with a production-ready server
FROM nginx:stable-alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /usr/src/app/dist/todo /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]