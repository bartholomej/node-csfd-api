FROM node:24-alpine

ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app
# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn --frozen-lockfile --production \
  && yarn add express dotenv --production \
  && yarn cache clean --force

# Copy the application code
COPY dist ./

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
