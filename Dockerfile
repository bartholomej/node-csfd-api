FROM node:24-alpine

ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app
# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn --frozen-lockfile --production \
  && yarn add express dotenv tsx --production \
  && yarn cache clean --force

# Copy the application code
COPY src ./src
COPY server.ts ./server.ts

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["yarn", "tsx", "server.ts"]
