# TASK MANAGEMENT MODULE -- API

# APP STRUCTURE

```
       APP STRUCTURE
       =============

├── node_modules
├── public ├── task
           ├── users ├── profile
├── src ├── bin
        ├── components ├──base
                       ├──project
                       ├──task
                       ├──user
        ├── config
        ├── documentation
        ├── helpers
        ├── libs
        ├── middleware
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md

```

## TECHNOLOGY

javascript ==> Node Js

## DEFAULT URL

    - development: http://localhost:3001
    - deployment: https://qt-api.nextreflexe.com

## installation Pre-requisites

- node js > 16.16.0
- mysql > 8.X

## INSTALLATION

- navigate to project directory
  => cd task-management-module-api
- install dependencies
  ==> npm install
- run project
  ==> npm run dev or npm run start

## DEPROYMENT

### INSTRUCTIONS:

        - make sure that you have docker and docker-compose installed on your system.
        - make sure that you have every details described above for install pre-requisites.
        - double check if the port number specified in the global properties are enabled so that that api shoud be accessible outside of the server
        - make sure that your mysql database is accessible outside of the server and user as well. [database name and database user specified in the global properties].


## TEST

### POSTMAN COLLECTION URL
     https://speeding-sunset-923348.postman.co/workspace/GENNEXT~3be0fb4b-a278-455f-b96c-292e62c15f05/collection/12290303-f8b93fbd-11fa-42ce-8432-6114512e62c4?action=share&creator=12290303&active-environment=12290303-f153d9b2-4894-493d-8c42-904e3256d5cc

### POSTMAN COLLECTION PATH

    working_path/QT Practical Test.postman_collection.json


### STEPS FOR DEPLOYMENT

        1. navigate to project directory
           => cd task-management-module-api
        2. build docker image
           => sudo docker build -t task-management-module-api:latest .
        3. run docker container
           => sudo  docker-compose up -d

N.B: this module was developed and tested on Linux (ubuntu 20.0.4)
