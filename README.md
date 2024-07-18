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

After that run command to up your images with docker-compose:
```
docker-compose up -d
```

Remember that you need to configure docker-compose.yml file and environment files for FE and BE.
