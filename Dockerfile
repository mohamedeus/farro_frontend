# Stage 1: Build the React application
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the React application with Express
FROM node:20
WORKDIR /app
COPY --from=build /app/build ./build
COPY server.js .
RUN npm install express
CMD ["npm", "start"]
