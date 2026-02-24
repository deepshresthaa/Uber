# Stage 1: Build Vite app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Nginx server
FROM nginx:1.25-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (container)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]