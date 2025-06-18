
# Use Node.js base image
FROM node:18

# Setup working directory
WORKDIR /app

# Copy packages and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . .

# Expose backend port
EXPOSE 5005

# Start the server
CMD ["node", "server.js"]



