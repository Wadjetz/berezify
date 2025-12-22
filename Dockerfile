FROM node:24-slim

RUN apt-get update && apt-get install -y \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libnss3 \
    libxrandr2 \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libdrm2 \
    libgbm1 \
    libxshmfence1 \
    libglu1-mesa \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . ./

RUN npm ci
RUN npm run build
RUN npm prune --omit=dev

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "build"]
