@echo off

REM Start Redis container using Docker Compose
echo Starting Bull container...
docker-compose up -d

REM Get the directory of the batch file
cd %~dp0

REM Open new command prompts to run scripts
start cmd /k "cd %cd% && npx ts-node src/consumer"
start cmd /k "cd %cd% && npx ts-node src/producer"
