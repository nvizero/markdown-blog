---
title: 'nextjs Build Dockerfile'
date: '2023-06-11'
excerpt: 'Nextjs,dockerfile,docker'
cover_image: '/images/posts/img1.jpg'
---

# Nextjs Build Dockerfile


```
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install --production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3100

ENV PORT 3100
#RUN pm2 start yarn --name "blog" --interpreter bash -- start
#CMD ["pm2", "start", "yarn start"] 
CMD ["npm", "start"]

```




 
[參考](https://geshan.com.np/blog/2023/01/nextjs-docker/)
