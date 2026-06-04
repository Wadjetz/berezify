# --- Build ---
FROM node:26-slim AS builder
WORKDIR /app

ENV PUPPETEER_SKIP_DOWNLOAD=true

COPY . ./

RUN npm ci && npm run build && npm prune --omit=dev

# --- Run ---
FROM node:26-slim
WORKDIR /app

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV NODE_ENV=production
ENV PORT=3000

RUN apt-get update && apt-get install -y --no-install-recommends chromium \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "/app/build"]
