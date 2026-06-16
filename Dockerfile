FROM node:22-slim

WORKDIR /app

COPY app/package*.json ./

RUN npm ci --omit=dev

USER node

EXPOSE 3000

CMD ["node", "src/server.ts"]