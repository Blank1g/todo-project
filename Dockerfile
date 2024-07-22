FROM node:alpine

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the application with a production-ready server
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist/todo /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]