# Build stage
FROM node:24-alpine AS build

WORKDIR /usr/src/app

COPY package.json yarn.lock tsconfig.json ./

# RUN corepack enable \
#     && corepack prepare yarn@4 --activate

RUN yarn

COPY . .

RUN yarn build && yarn build:server

# Production stage
FROM node:24-alpine AS production

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY --from=build /usr/src/app/dist ./

# COPY .yarnrc.yml ./

# RUN corepack enable \
#     && corepack prepare yarn@4 --activate

RUN yarn --production  \
    && yarn add express dotenv cors express-rate-limit express-slow-down \
    && yarn cache clean

EXPOSE 3000

CMD ["node", "server.mjs"]
