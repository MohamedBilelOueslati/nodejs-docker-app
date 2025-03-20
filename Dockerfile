# Use official Node.js image
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
