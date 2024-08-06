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

### Fundamentals
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
>   a. Single Threaded - один потік, не може використовувати кілька завдань одночасно. Багатопоточне програмування - потоки відкриваються в залежності від кількості задач (2-3 задачи = 2-3 потока), є більше навантаження на CPU, може відбутися deadlock, якщо не правильно > хендлити потоки. <br />
>   b. Asynchronous - синхронне програмування - чекає на закінчення одної, щоб почати наступну. Асинхронність - поток ініціює виконання завдання, після чого переходить на ініціалізацію наступного не чикаючи на закінчення попереднього. Node має івенти, тому івент 
> викликається коли закінчується виконання функції і її результат йде відразу в потік першим пріорітетом. <br />
>   c. Event-Driven (Events, Event Emitter, Event Queue, Event Loop) - EVENT EMITTER це місце з якого йде сигнал (по типу кліку, або закінчення виконання функції і тд), вони прокидують івент в EVENT QUEUE з якої Node буде брати по одному івенту, який буде відправлений в
> EVENT HANDLER, який є нашим кодом для реагування на цей івент, весь цей процес називається EVENT LOOP. Event-Driven architecture - це всі ці поняття об'єднанні. <br />
>   d. V8 JavaScript engine <br />
>   e. Cross-Platform - можна використовувати на майже любій платформі (os) <br />
>   f. NPM <br />
>   g. Real-Time Capabilities <br />
8. What are the main features & advantages of Node.js?
> фічі, які позначені вище, і те що вони дають при написанні на Node.js. Використовує JavaScript як і клієнт.\
9. What are the disatvantages of node? When to use and when not to use Node?
> використовувати можна для real-time апок, по типу чатів, онлайн ігор, для RESTful апок різних розмірів, для програм з microservice-base architectire де використовуються різні мови, або розбито на різні частини. НЕ ВИКОРИСТОВУВАТИ для важких для CPU задач і проектів, 
> на приклад Image/Video processing, data encryption/decryption, так як node має 1 потік, а для цих задач потрібно кілька потоків.
10. How to setup node.js project?
>  a. download Node <br />
>  b. download VSCode (any editor) <br />
>  c. create new folder for project <br />
>  d. open folder in VSCode <br />
>  e. run ```npm init -y``` <br />
>  f. create ```app.js``` file <br />
>  g. run app with command ```node app.js``` <br />
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
> const module1 = require('./module1');  <br />
> // miltiple:
> module.export.functionName1
> module.export.functionName2
> const module1 = require('./module1');
> module1.functionName1
> module1.functionName2
17. What is module wrapper function?
> файл, який викликається через команду node app.js (або інший файл), автоматично загортується нодою в самовикликаючу функцію, тому код буде відпрацьовано, коли запуститься файл.
18. What are the types of modules in Node?
>  a. Core modules (Build-in modules) - модулі по типу fs, path, http і тд. <br />
>  b. Local modules - модулі створені людиною. <br /> 
>  c. Third-Party modules - модулі з ком'юніті, які потрібно завантажити через npm. <br />
19. What are TOP 5 build in modules commonly used in node projects?
>  a. fs - модуль для керування файлами (зберігання, редагування, видалення і тд) з такими функціями як writeFile, readFile, mkDir і тд. <br />
>  b. path - модуль для керування шляхом до файлів у вигляді стрінги, нормалізування, парсинг і тд.  <br />
>  c. os - модуль з методами для отримання інформації по системі.  <br />
>  d. events - модуль для керування, реагування на івенти ноди, з модуля ми отримуємо EventEmitter, після чого можемо слухати на наш кастомний івент в методі ```on```, викликати цей івент через ```emit``` метод, в цей івент можна передавати аргументи. <br />
>  e. http - модуль для створення сервера, який слухає порт сервера, і дає респонс клієнту. ```createServer``` метод цього модуля створює сервер. <br />

### Express

20. What are the advantage of using Express.js with Node.js?
> a. Спрощення розробки через готові рішення які він надає  <br />
> b. Middleware support  <br />
> c. Гнучка навігація  <br />
> d. Template engine integration - можна писати темплейт на стороні серверу.  <br />
21. How to create an HTTP Server using Express.js?
> Використовуючи ```express()``` з бібліотеки express, після чого викликаєтьмя ```listen``` з потрібним портом.
22. What is Middleware in Express.js and when to use them?
> Middleware (проміжне програмне забезпечення) - яке є функцією, яка виконує конкретну роботу. Наприклад Middleware 1 - це Request Logging метод, далі Middleware 2 - це Authentication, Middleware 3 - це CORS і після того, як вони пройдуть всі, тоді відбудеться
> GET/POST/PUT/DELETE і response піде назад до клієнта від сервера. Також всі ці middleware  разом називаються REquest Pipeline.
23. How do you implement middleware in Express.js?
> Створюється апка через express(), після чого оголошується метод з (req, res, next), де next має викликатися в кінці логіки цієї функції. Через app.use(назва нашої функції), для того, щоб код виконався в апці, коли вона запуститься.
24. What is the purpose of the app.use() function in Express.js?
> Метод use використовується, для того, щоб викливати middleware глобально для всіх запитів
25. What is the purpose of the next parameter in Express.js?
> next параметр це функція, яка викликається в кінці Middleware, для того, щоб наступний Middleware міг відпрацювати
26. How to use middleware globally for a specific route?
> Щоб middleware відпрацював для конкретного шляху, потрібно додати цей шлях в use метод - app.use('/example', middleware);
27. What is Request Pipeline in Express?
> Це серія middleware, які проходять перед тим, як відбудеться GET/POST/PUT/DELETE запит на сервері
28. What are the Types of middleware's in Express.js?
> a. Application-level middleware - глобально використовується для ВСІХ запитів.  <br />
> b. Router-level middleware - викликається тільки для конкретного шляху.  <br />
> c. Error-handling middleware - використовує параметер err в use методі (app.use((err, req, res, next) => {})), потрібен для опрацювання помилок. ОБОВ'ЯЗКОВО ДОДАВАТИ В КІНЦІ ВСІХ middleware <br />
> d. Build-in middleware - express має свої методи, які можна викоирстовувати як middleware, наприклад керування статичними файлами через express.static('public') - після чого можна доступатися по шляху - де він є назвою шляху. <br />
> e. Third-party middleware - методи, які завантаженні від ком'юніті і тд. (bodyParser.json(), helmet() і тд.) <br />
29. What are the advantages of using middleware in Express.js?
> a. Modularity - middleware як модулі, якими можна розбити на модулі апку. <br />
> b. Reusability - можна перевикористовувати. <br />
> c. Improve Request Handling - простіше хендлити request/response. <br />
> d. Flexible Control Flow - можна визначати, для якого шляху він буде використовуватися. <br />
> e. Third-party Middleware's - можна спростити життя, використовуючи зовнішні методи, написані ком'юніті. <br />
30. What is Routing is Express.js?
> Навігація по проекту, яка відбувається за різними принципами, такими як REST, GraphQL, Soap і тд.
> Залежно від того, який йде запит, на такий контроллер посилає відпрацювання даних раутинг в експресі
31. What is the difference between middleware & routing in Express?
> Мідлвер - це метод який відпрацьовує якусь логіку, раутинг - це процес який перенеправляє запит на відповідний метод де він буде опрацьований.
32. How to implement routing? How do you define routes in Express.js?
> Створюється app.get в якому першим параметром передається шлях, залежно від якого буде робитися запит.
33. How to handle Routing in Express.js real application?
> Зазвичай імпортується контролер, для того, щоб залежно від шляху перенаправляти запит одразу в контроллер, в якому він має бути опрацьований. (app.get('/orders', ordersController.getOrders));
34. What are Route Handlers?
> Це другий параметр в app.get('/', (req, res) => {}) - по суті це просто колбек функція.
35. What are Router Parameters in Express.js?
> Це перший параметр в app.get('/', (req, res) => {}) - шлях за яким викличеться колбек.
36. What are Router object & Router Methods and how to implement them?
> Об'єкти маршрутизації - це router = express.Router() <br />
> Методи маршрутизації - це метод get в router.get('/', (req, res) => {}) <br />
> цей об'єкт можна експортувати та використати в app.use('/api', router);
37. What is express.Router() in Express.js?
> Клас, який повертає об'єкт router.
38. What is Route Chaining is Express.js?
> Можливість викликати кілька методів (middlewares не колбек метод), по одному шляху.
39. What is Route Nesting in Express.js?
> Вкладеність шлаху, наприклад /product/feature і /products/ratings, де products - це спільний префікс, а feature і ratings це вкладені шляхи.
40. What are Template Engines in Express.js?
> Це бібліотеки, які дають змогу генерувати HTML контент з данними на бекенді
41. Name some Template Engines libraries?
> EJS, Handlebars, Pub, Mustache, Nunjucks.
42. How to implement EJS template engine is a Express.js application?
> Встановити ejx => створити ```index.ejs``` => написати в цьому файлі HTML по принципу ejs => додати view engine в ```app.js``` через ```app.set('view engine', 'ejs')``` => ```app.set('views', path.join(__dirname, 'views'))``` => ```app.get('/' (req, res) => { res.render('index'), { data: data } })```

### REST API

43. What is REST & RESTful API?
>  Архітектульний дизайн (набір правил), який використовується для написання API. RESTful означає, що певна API використовує правила і принципи, які використовуються в REST
44. What are HTTP Request and Response structures in UI and REST API?
> Приклад скруктури запиту POST: "POST /api/user/create, HTTP/1.1, Host: api-server.expmple.com, uid=john&password=123, // Header, conten-type.." <br />
> Приклад відповіді: "HTTP/1.1 201 Created, Content-Type: application/json, { "userId": 123, "message": "User created" }"
45. What are Top 5 REST guidelines and the advantage of them?
> a. Separation of Client and Server - означає, що клієнт і сервер мають бути створено окремо і мають бути незалежними, тому REST не може бути монолітним проектом де template не має бути на стороні серверу <br />
> b. Stateless - сервер не повинен зберігати нічого про запит, сервер може читати запити і відповідати на них, але нічого не зберігати наприклад не зберігати сесію <br />
> c. Uniform interface - кожен url в цій API має репрезентувати собою унікальний сервіс цього API. Наприклад ```abc.com/shoes``` - повинен відповідати тільки за логіку shoes і тд. <br />
> d. Cachable - можна кешувати запит, якщо відправляється однаковий кілька разів. <br />
> e. Layered system - повинен наслідувати систему MVC або іншого модульного принципу, що означає, що API має бути розбина на різні модулі, кожен з яких відповідає за свою фічу. <br />
46. What is the difference between REST API and SOAP API
> a. REST API - архітектурний стиль написання, SOAP API - протокол. <br />
> b. REST API - використовує HTTP або HTTPS, SOAP API - може використовувати різні протоколи, наприклад HTTP, SMTP etc. <br />
> c. REST API - stateless, SOAP API - може бути як stateful так і stateless. <br />
> d. REST API - покладається на HTTP статус коди по типу 200, 201, 404 і тд., SOAP API - сама визначає свій механізм помилок. <br />
> e. REST API - менша і швидша, SOAP API - може бути повільнішою через обробку XML. <br />
    
