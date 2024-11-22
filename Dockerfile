FROM node:22-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the application code
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["yarn", "tsx", "server.ts"]
