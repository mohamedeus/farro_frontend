# Stage 1: Build the React application
FROM node:20 AS build

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:stable-alpine

# Copy the built assets from the build stage to the Nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it from the outside.
EXPOSE 80

# Start Nginx and serve the application
CMD ["nginx", "-g", "daemon off;"]
