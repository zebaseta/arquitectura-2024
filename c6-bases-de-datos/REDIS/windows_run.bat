@echo off

REM Start Redis container using Docker Compose
echo Starting Redis container...
docker-compose up -d

REM Get the directory of the batch file
cd %~dp0

REM Open new command prompts to run scripts
start cmd /k "cd %cd% && npx ts-node src/cacheModule"
start cmd /k "cd %cd% && npx ts-node src/testRedis"
