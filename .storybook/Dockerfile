FROM node:22-slim

# Set WORKDIR to .storybook so node_modules are in /app/.storybook/node_modules.
# This ensures path.resolve(__dirname, 'node_modules/storybook') works in viteFinal,
# since __dirname = /app/.storybook in this container.
WORKDIR /app/.storybook

# Install dependencies (cached layer)
COPY package.json ./
RUN npm install --legacy-peer-deps

EXPOSE 6006

# --config-dir . : config is in CWD (/app/.storybook) where main.ts is volume-mounted.
CMD ["node_modules/.bin/storybook", "dev", "--port", "6006", "--host", "0.0.0.0", "--no-open", "--config-dir", "."]
