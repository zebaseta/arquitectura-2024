#!/bin/bash

# Start Redis container using Docker Compose
echo "Starting Redis container..."
docker-compose up -d

# Current directory
cd "$(dirname "$0")"

# Install dependencies
# Exercise: Execute npm install

# Open new Terminal windows to run scripts
osascript -e 'tell app "Terminal" to do script "cd '"$(pwd)"' && npx ts-node src/cacheModule"'
osascript -e 'tell app "Terminal" to do script "cd '"$(pwd)"' && npx ts-node src/testRedis"'
