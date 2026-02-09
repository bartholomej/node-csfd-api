# Build stage
FROM node:24-alpine AS build

WORKDIR /usr/src/app

COPY . .

# RUN corepack enable \
#     && corepack prepare yarn@4 --activate

RUN yarn --frozen-lockfile

RUN yarn build

# Production stage
FROM node:24-alpine AS production

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY --from=build /usr/src/app/dist/server.mjs ./server.mjs

# COPY .yarnrc.yml ./

# RUN corepack enable \
#     && corepack prepare yarn@4 --activate

EXPOSE 3000

CMD ["node", "server.mjs"]
