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

## Node.js Q&A

1. Runtime Environment?
> environment, який відповідальний за менеджмент зберігання і конвертування high level мови таких як JavaScript, C#, Java і тд.
2. What is Node.js?
> Runtime Environment для JavaScript на серверній стороні.
3. How Node is a runtime environment on server side? What is V8? 
> JavaScript раниться в хромі з допомогою двигунів по типу V8 в Chrome. Node.js це те що заміняє Chrome (такий собі врапер) але використовує V8. V8 - двигун (engine) який запускає JavaScript.
4. What is the difference between Runtime environment & Framework?
> одна мова може мати більше ніж runtime environment і може мати кілька frameworks. Runtime environment - сфокусований на те, щоб забеспечити інфраструктуру для виконання коду, включаючи менеджмент пам'яті та input/output операцій. Framework - надає набір інструментів, > бібліотек, класів і тд для девелопменту.
5. What is the difference between Node.js & Express.js?
> Node.js - це runtime environment, Express.js - це framework.
6. What are the differences between Client-Side(browser) & Server-side(Node.js)
> різні runtime environment. Клієнт використовує додатково HTML та CSS, браузер використовує document, window, navigator і event object. Request, response, server, database object використовується на серверній стороні. Різні відповідальності, клієнт відображає, сервер > > працює з даними і тд.
7. What are the 7 Main Features of Node.js?
>   a. Single Threaded - один потік, не може використовувати кілька завдань одночасно. Багатопоточне програмування - потоки відкриваються в залежності від кількості задач (2-3 задачи = 2-3 потока), є більше навантаження на CPU, може відбутися deadlock, якщо не правильно > хендлити потоки.
>   b. Asynchronous - синхронне програмування - чекає на закінчення одної, щоб почати наступну. Асинхронність - поток ініціює виконання завдання, після чого переходить на ініціалізацію наступного не чикаючи на закінчення попереднього. Node має івенти, тому івент 
> викликається коли закінчується виконання функції і її результат йде відразу в потік першим пріорітетом.
>   c. Event-Driven (Events, Event Emitter, Event Queue, Event Loop) - EVENT EMITTER це місце з якого йде сигнал (по типу кліку, або закінчення виконання функції і тд), вони прокидують івент в EVENT QUEUE з якої Node буде брати по одному івенту, який буде відправлений в 
> EVENT HANDLER, який є нашим кодом для реагування на цей івент, весь цей процес називається EVENT LOOP. Event-Driven architecture - це всі ці поняття об'єднанні.
>   d. V8 JavaScript engine
>   e. Cross-Platform - можна використовувати на майже любій платформі (os)
>   f. NPM
>   g. Real-Time Capabilities
8. What are the main features & advantages of Node.js?
> фічі, які позначені вище, і те що вони дають при написанні на Node.js. Використовує JavaScript як і клієнт.\
9. What are the disatvantages of node? When to use and when not to use Node?
> використовувати можна для real-time апок, по типу чатів, онлайн ігор, для RESTful апок різних розмірів, для програм з microservice-base architectire де використовуються різні мови, або розбито на різні частини. НЕ ВИКОРИСТОВУВАТИ для важких для CPU задач і проектів, 
> на приклад Image/Video processing, data encryption/decryption, так як node має 1 потік, а для цих задач потрібно кілька потоків.
10. How to setup node.js project?
>  a. download Node
>  b. download VSCode (any editor)
>  c. create new folder for project
>  d. open folder in VSCode
>  e. run ```npm init -y```
>  f. create ```app.js``` file
>  g. run app with command ```node app.js```
11. What is NPM? What is the role of node_modules folder?
> node_modules тримає в собі всі залежності проекту, а NPM це менеджер, який менеджить ці залежності.
12. What is the role of package.json file in Node?
> файл, який тримає в собі metadata (інформація про проект такі як назва, опис, скріпти і тд) проекту.
13. What are Modules in Node? What is the difference between a function & module?
> Модуль містить в собі конкретний функціонал, який можна легко перевикористовувати в застосунку на Node.
> Модуль це концепт, в якому може бути кілька функцій. Він інкапсулює функції, і містить в собі інструкції для їх використання.
14. How many ways are there to Export a module?
> module.exports.functionName = functionName;
> exports.functionName = function () {};
15. What will happen if you don't export the module?
> Якщо не експортнути, то використати назовні не можна.
16. How to import single and multiple functions from a module?
> // single:
> module.export.functionNam
> const module1 = require('./module1');
> 
> // miltiple:
> module.export.functionName1
> module.export.functionName2
> const module1 = require('./module1');
> module1.functionName1
> module1.functionName2
17 What is module wrapper function?
> файл, який викликається через команду node app.js (або інший файл), автоматично загортується нодою в самовикликаючу функцію, тому код буде відпрацьовано, коли запуститься файл.
18. What are the types of modules in Node?
> a. Core modules (Build-in modules) - модулі по типу fs, path, http і тд.
> b. Local modules - модулі створені людиною.
> c. Third-Party modules - модулі з ком'юніті, які потрібно завантажити через npm. 
