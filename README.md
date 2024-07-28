## Server
To start server run:
npm run dev

## Client
To start client run:
npm start

## PostgreSQL and Redis
Also you need to run your PostgreSQL and Redis on default port

## Docker
To run docker you need to create images for client and server like this:
```
docker build -t todo-server . (you need to be located in the server folder)
docker build -t todo-client . (you need to be located in the client folder)
```

After that run command to up your images with docker-compose (you need to be located in the server folder):
```
docker-compose up -d // up container
docker-compose down // down container
```

Remember that you need to configure docker-compose.yml file and environment files for FE and BE.

## SERVER WILL NOT WORK WITHOUD DNS
Here is guide for how to setup dns for server, and you need to configure public folder with SSL sertificate - [link](https://macdonaldchika.medium.com/how-to-install-tls-ssl-on-docker-nginx-container-with-lets-encrypt-5bd3bad1fd48)

## CI made with Jenkins
Here is small [guide](https://blog.kwal-it.be/how-to-create-an-angular-pipeline-with-jenkins-8040f1a0c0ee)
