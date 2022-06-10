# How to get this up and running on your machine

Scafold for the structure of this app docker-compose setup + folder structure taken from https://github.com/aryrabelo/rails-react-docker-starter Modified to use a different version of rails because of that removed Gem issue.

1. Check if docker compose is installed ```docker-compose --version``` 
2. If it is not installed, install docker desktop [here](https://www.docker.com/products/docker-desktop/), which includes compose
2. Clone this repo and cd into the base folder where the docker-compose.yml file is located
4. CD into ./frontend folder and run ```yarn install``` to install dependencies
3. In the main folder run ```docker-compose up -d```
4. In a seperate terminal run ```docker-compose run backend rake db:create```
3. Restart backend by running ```docker-compose up -d backend```
4. You can check the status of the services by running ```docker ps -a```
5. The frontend will be available at localhost:3000

If you need to interact with the rails application, you can SSH into the dockerized rails app by running ```docker-compose exec backend bash``` from there you have access to the familiar commands like ```rails console``` etc..


# Plan for development

Base:
- Create plan, including a plan for testing and resource relations
- Scaffold a client and server application 
- Use git flow for the rest of the features
- Create a v1 api namespace and a simple controller to ensure application configuration is working
- Create backend models, use TDD for unit testing of rails models
    - If short on time, speed through TDD
- Create controllers, use TDD to test the API routes
- Create some seed data in seeds.rb so that the front end exeperience makes sense
- Front End time:
   - Create a list of users you can choose from to see your view
   - Add in basic code for API requests
   - Create a form to post a new location
   - Create a form to post a new pickup
   - Create a list of pickups 

Strech:
- Authz
- Flushed out testing
- Improved UI
- Frontend testing 
- Better location validation



## Data Model (in progress):

```
organization: {
    id: integer
    name: string
    timestamps

    ----

    has_many: users
    has_many: locations through: user
}

user: {
    id: integer
    organization: organization
    timestamps
}

pickup: {
    id: integer,
    datetime: datetime,
    location: location
    timestamps

    ----

    has_one: location
    has_many: pickup_statuses
}

location: {
    address: text
    name: string
    organization: organization
    timestamps
}

pickup_status: {
    id
    pickup_id
    status: enum(0: pending, 1: in_progress, 2: complete)
    timestamps
}
```

## API Routes

```
GET /users
GET /organization/:id/pickups
GET /organization/:id/locations

POST /pickups 
POST /locations
```
