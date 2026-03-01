FROM node:22-slim

WORKDIR /app

# Install dependencies (cached layer)
COPY package.json ./
RUN npm install --legacy-peer-deps

EXPOSE 6006

CMD ["npm", "run", "storybook"]
