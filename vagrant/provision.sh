# This script will provision the vagrant machine for local development

APP_DIR="/home/vagrant/app"

printf "\n Updating aptitude cache \n"

sudo apk update

printf "\n Installing required system packages \n"

sudo apk add \
    g++ \
    make \
    ca-certificates \
    curl \
    ffmpeg

printf "\n Installing NodeJS \n"

curl "https://nodejs.org/download/release/v13.9.0/node-v13.9.0.tar.xz"

tar -xvf node-v13.9.0.tar.xz

ln -s ./node-v13.9.0.tar.xz/bin/node /usr/local/bin/

ln -s ./node-v13.9.0.tar.xz/bin/npm /usr/local/bin/

ln -s ./node-v13.9.0.tar.xz/bin/npx /usr/local/bin/

node -v

printf "\n Installing Yarn \n"

sudo apk add yarn

printf "\n Installing NodeJS dependencies \n"

cd $APP_DIR || exit
yarn

printf "\n Installing Docker \n"

sudo apk add docker
rc-update add docker boot

sudo chmod 0666 /var/run/docker.sock
