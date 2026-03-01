FROM node:22-slim

WORKDIR /app

# Install dependencies (cached layer)
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copy source
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
