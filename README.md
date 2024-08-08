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
47. What are HTTP Verbs and HTTP methods?
> це GET/POST/PUT/DELETE/PATCH методи \
48. Що таке GET, POST, PUT & DELETE HTTP methods?
> GET - отримання з сервісу, можна передивати id в запит через шлях. <br />
> POST - відправлення даних для з конкретною метою, має request body.  <br />
> PUT - оновлення або створення ресурсу, якщо його не існує, має request body.  <br />
> DELETE - видалення ресурсу, request body - опціональний, id передається через url.  <br />
49. What is the difference between PUT & PATCH methods?
> Обидва потрібні для оновлення або зміни існуючих даних. PUT - має мати всі поля не залежно від того, чи їх потрібно змінити. PATCH - відправляє тільки ті поля, які потрібно змінити.
50. Explain the concept of Idempotence in RESTful APIs.
> GET запит з однаковим url має завжди повертати одні і ті ж данні. Результати кожного запиту мають бути однаковими для GET PUT DELETE, тим часом POST не є таким, так як постійно може створювати різні інстанси.
51. What are the role of status codes in RESTful APIs?
> Відповідають за інформацію про те, як пройшов запит, де 1xx (інформаційний), 2xx (успіх), 3хх (зміна шляху), 4хх (проблема зі сторони клієнта), 5хх (проблема зі сторони сервера).
52. What is CORS in RESTful APIs?
> Секюріті фіча, яка використовується браузером. <br />
> CROSS ORIGIN WEB SHARING - це захист для того, щоб інші ресурси не могли доступатися, до зовнішніх ресурсів, наприклад ```http://my-project.com/index.html``` може обмінюватися даними з ```http://my-project.com/getdata```, але не може обмінюватися з ```http://external.com/getdata``` <br />
> Сабдомени по типу ```http://api.my-project.com/getdata``` також заборонені. <br />
> HTTPS ```https://my-project.com/getdata``` також заборонений по дефолту. <br />
> Якщо різні порти ```http://my-project.com:12/getdata``` також заборонено по дефолту. <br />
53. How to remove CORS restrictions RESTful APIs?
> Ми можемо забрати CORS заборони використовуючи ```app.use(cors())``` де ```cors()```це бібліотека. Це можна зробити як для конкретних ресурсів, так і відразу для всіх.
54. What are Serialization & Deserialization?
> У нас є REST API 1 і REST API 2, нам потрібно ділитися даними між ними, тоді ми використовуємо концепт Serialization & Deserialization, який означає форматування даних в одному api з Object в json, відправка через network в другу api і конвертація назад з json в Object. це потрібно через те, що різні API можуть бути написані на різних технологіях, щось на JavaScript інша на C# і тд.
55. What are the types of serialization?
> Binary Serialization <br />
> XML Serialization <br />
> JSON Serialzation
56. Explain the concept of versioning in RESTful APIs.
> Версії потрібні для того, щоб була можливість мати стабільний продукт без зміни версії, якщо покращення, зміни нових версій не потрібні клієнту.
57. What is an API document? What are the popular documentation formats?
> API document - це як swagger, документ, який може бути різних форматів, де показані усі запити, які присутні на конкретному API.
58. What is the typical structure of a REST API project in Node?
> ![image](https://github.com/user-attachments/assets/20e7f010-2273-4e62-993c-64089017d21c)
59. What are Authentication and Authorization?
> Authentication - процес логінізації, веріфікації користувача, за якимись ознаками для надання доступу до програми, яке перевіряється через базу <br />
> Authorization - процес надання доступ до різних фіч через визначення ролі користувача.
60. What are the types of authentication in Node.js?
> Basic (username and password) - данні користувача передаються через логін і пароль, але передаються як текст в network, де вони не є закодовані, тому це не дуже сек'юрно <br />
> API Key - використовуючи ApiKey з ключем в значені, який ми додаємо для кожного запиту в Header. Проблема в тому, що ключ може бути поширений між користувачами, тому контролювати хто доступається не вийде в такому випадку. <br />
> Token-based (JWT) - найпопулярніший варіант, використовується JSON WEB TOKEN, який зберігається в Cookies зі сторони серверу після вдалої веріфікації користувача. Цей токен додається до кожного наступного запиту сервера. Токен має свою сесію, тому може закінчитися через якийсь час. Токен передається в Header запитів (Authorization: Bearer 'JWT TOKEN'). Токен перевіряється щоразу на стороні сервера на валідність. Закодований токен з допомогою секретного слова. <br />
> Multi-factor (MFA) <br />
> Certificate-based <br />
61. What are the security risks associated with storing passwords in plain text in Node.js?
> Зберігання пароля у вигляді звичайного тексту ризиковано, через те, що всі хто може доступитися до усіх паролів, буде мати доступ до цих акаунтів.
62. What is the role of Hashing and Salt in securing passwords?
> Hashing - алгоритми за якими можна закодовувати текст (наприклад пароль). Salt - це рандомна стрінга, яка генерується через бібліотеку bcrypt. Об'єднавши Salt та Hashing можна краще закодувати пароль.
63. How can we create Hash Password in Node.js?
> ![image](https://github.com/user-attachments/assets/e14bf538-b321-49f2-b6d4-144ab72e33f1)
64. What are the parts of JWT token?
> Токен є об'єктом, який закодований, тому може містити в собі будь-які дані. Також може бути налаштований, щоб мати сесію.

### Random NODE questions

65. What is Error Handling? In how many ways you can do error handling in Node.js?
> Процес аналізу, реагування, опрацювання помилок, які відбуваються. <br />
> Try-Catch (sync) <br /> ![image](https://github.com/user-attachments/assets/e92aff8b-d7da-44c5-8758-386e925fe354) <br />
> Error-First Callbacks (async) <br /> ![image](https://github.com/user-attachments/assets/6a1a0cb4-26ce-4723-a8f3-b8c8e5e2a784) <br />
> Promises (async) - через catch block <br /> ![image](https://github.com/user-attachments/assets/36648ed0-4725-4418-956e-e671a0b9413f) <br />
> Try-Catch with async-await (async) - the most popular <br /> ![image](https://github.com/user-attachments/assets/4719213e-eec6-468a-bc2b-5318196335de)
66. How can you Debug Node.js application?
> console.log() <br />
> debugger statement <br />
> Node.js inspector <br />
> Visual Studio Code debugger <br />
> Chrome DevTools
67. process.nextTick() vs setImmediate().
> - process.nextTick() schedules a callback to be invoked in the same phase of the event loop, before the next I/O operation. <br />
> - setImmediate() schedules a callback to be invoked in the next iteration of the event loop, after I/O operations. <br />

Preparing with help of the [Node JS Interview Masterclass: Top 200 Questions](https://www.udemy.com/course/node-js-interview-masterclass-top-200-questions-with-pdf/?couponCode=ST10MT8624)
