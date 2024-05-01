RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo "${GREEN} ================================== STARTING BUILD ================================== ${NC}"

npm install 
# TODO: Make it run this and also change the start to use the compiled version
# npm run build


if ! docker-compose build --no-cache --parallel
then
    echo -e "${RED} Docker Build failed"
    exit 16
fi

echo "${GREEN} ================================== BUILD FINISH SUCCESSFULLY ================================== ${NC}"
echo "run ./run-docker-server.sh to start the server"