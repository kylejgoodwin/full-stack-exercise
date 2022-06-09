# How to set up the project

Scafold for the structure of this app docker-compose setup + folder structure taken from https://github.com/aryrabelo/rails-react-docker-starter Modified to use a different version of rails because of that removed Gem issue.

1. Check if docker compose is installed ```docker-compose --version``` 
2. If it is not installed, install docker desktop (here)[https://www.docker.com/products/docker-desktop/], which includes compose
2. Clone this repo and cd into the base folder where the docker-compose.yml file is located
4. Install fronted dependencies
    4. CD into ./frontend and run ```yarn install```
3. In the main folder run ```docker-compose up -d```
4. In a seperate terminal run ```docker-compose run web rake db:create```
3. Restart backend by running ```docker-compose up -d backend```
5. The frontend will be available at localhost:3000