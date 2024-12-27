# Step 1: Use Node.js (version 20.11.1) to build the app
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Use an Nginx image to serve the app
FROM nginx:alpine

# Copy the build output to Nginx's default public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port used by Nginx
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
