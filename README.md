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
> environment, який відповідальний за менеджмент зберігання і конвертування high level мови таких як JavaScript, C#, Java і тд.<br />

2. What is Node.js?
> Runtime Environment для JavaScript на серверній стороні.<br />

3. How Node is a runtime environment on server side? What is V8? 
> JavaScript раниться в хромі з допомогою двигунів по типу V8 в Chrome. Node.js це те що заміняє Chrome (такий собі врапер) але використовує V8. V8 - двигун (engine) який запускає JavaScript.<br />

4. What is the difference between Runtime environment & Framework?
> одна мова може мати більше ніж runtime environment і може мати кілька frameworks. Runtime environment - сфокусований на те, щоб забеспечити інфраструктуру для виконання коду, включаючи менеджмент пам'яті та input/output операцій. Framework - надає набір інструментів, > бібліотек, класів і тд для девелопменту.<br />

5. What is the difference between Node.js & Express.js?
> Node.js - це runtime environment, Express.js - це framework.<br />

6. What are the differences between Client-Side(browser) & Server-side(Node.js)
> різні runtime environment. Клієнт використовує додатково HTML та CSS, браузер використовує document, window, navigator і event object. Request, response, server, database object використовується на серверній стороні. Різні відповідальності, клієнт відображає, сервер > > працює з даними і тд. <br />

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
> фічі, які позначені вище, і те що вони дають при написанні на Node.js. Використовує JavaScript як і клієнт.<br />

9. What are the disatvantages of node? When to use and when not to use Node?
> використовувати можна для real-time апок, по типу чатів, онлайн ігор, для RESTful апок різних розмірів, для програм з microservice-base architectire де використовуються різні мови, або розбито на різні частини. НЕ ВИКОРИСТОВУВАТИ для важких для CPU задач і проектів, 
> на приклад Image/Video processing, data encryption/decryption, так як node має 1 потік, а для цих задач потрібно кілька потоків.<br />

10. How to setup node.js project?
>  a. download Node <br />
>  b. download VSCode (any editor) <br />
>  c. create new folder for project <br />
>  d. open folder in VSCode <br />
>  e. run ```npm init -y``` <br />
>  f. create ```app.js``` file <br />
>  g. run app with command ```node app.js``` <br />

11. What is NPM? What is the role of node_modules folder?
> node_modules тримає в собі всі залежності проекту, а NPM це менеджер, який менеджить ці залежності.<br />

12. What is the role of package.json file in Node?
> файл, який тримає в собі metadata (інформація про проект такі як назва, опис, скріпти і тд) проекту.<br />

13. What are Modules in Node? What is the difference between a function & module?
> Модуль містить в собі конкретний функціонал, який можна легко перевикористовувати в застосунку на Node.
> Модуль це концепт, в якому може бути кілька функцій. Він інкапсулює функції, і містить в собі інструкції для їх використання. <br />

14. How many ways are there to Export a module?
> module.exports.functionName = functionName;
> exports.functionName = function () {};<br />

15. What will happen if you don't export the module?
> Якщо не експортнути, то використати назовні не можна.<br />

16. How to import single and multiple functions from a module?
> // single: <br />
> module.export.functionNam <br />
> const module1 = require('./module1');  <br />

> // miltiple: <br />
> module.export.functionName1 <br />
> module.export.functionName2 <br />
> const module1 = require('./module1'); <br />
> module1.functionName1 <br />
> module1.functionName2 <br />

17. What is module wrapper function?
> файл, який викликається через команду node app.js (або інший файл), автоматично загортується нодою в самовикликаючу функцію, тому код буде відпрацьовано, коли запуститься файл.<br />

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
> Використовуючи ```express()``` з бібліотеки express, після чого викликаєтьмя ```listen``` з потрібним портом.<br />

22. What is Middleware in Express.js and when to use them?
> Middleware (проміжне програмне забезпечення) - яке є функцією, яка виконує конкретну роботу. Наприклад Middleware 1 - це Request Logging метод, далі Middleware 2 - це Authentication, Middleware 3 - це CORS і після того, як вони пройдуть всі, тоді відбудеться
> GET/POST/PUT/DELETE і response піде назад до клієнта від сервера. Також всі ці middleware  разом називаються REquest Pipeline.<br />

23. How do you implement middleware in Express.js?
> Створюється апка через express(), після чого оголошується метод з (req, res, next), де next має викликатися в кінці логіки цієї функції. Через app.use(назва нашої функції), для того, щоб код виконався в апці, коли вона запуститься.<br />

24. What is the purpose of the app.use() function in Express.js?
> Метод use використовується, для того, щоб викливати middleware глобально для всіх запитів<br />

25. What is the purpose of the next parameter in Express.js?
> next параметр це функція, яка викликається в кінці Middleware, для того, щоб наступний Middleware міг відпрацювати<br />

26. How to use middleware globally for a specific route?
> Щоб middleware відпрацював для конкретного шляху, потрібно додати цей шлях в use метод - app.use('/example', middleware);<br />

27. What is Request Pipeline in Express?
> Це серія middleware, які проходять перед тим, як відбудеться GET/POST/PUT/DELETE запит на сервері<br />

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
> Залежно від того, який йде запит, на такий контроллер посилає відпрацювання даних раутинг в експресі<br />

31. What is the difference between middleware & routing in Express?
> Мідлвер - це метод який відпрацьовує якусь логіку, раутинг - це процес який перенеправляє запит на відповідний метод де він буде опрацьований.<br />

32. How to implement routing? How do you define routes in Express.js?
> Створюється app.get в якому першим параметром передається шлях, залежно від якого буде робитися запит.<br />

33. How to handle Routing in Express.js real application?
> Зазвичай імпортується контролер, для того, щоб залежно від шляху перенаправляти запит одразу в контроллер, в якому він має бути опрацьований. (app.get('/orders', ordersController.getOrders));<br />

34. What are Route Handlers?
> Це другий параметр в app.get('/', (req, res) => {}) - по суті це просто колбек функція.<br />

35. What are Router Parameters in Express.js?
> Це перший параметр в app.get('/', (req, res) => {}) - шлях за яким викличеться колбек. <br />

36. What are Router object & Router Methods and how to implement them?
> Об'єкти маршрутизації - це router = express.Router() <br />
> Методи маршрутизації - це метод get в router.get('/', (req, res) => {}) <br />
> цей об'єкт можна експортувати та використати в app.use('/api', router); <br />

37. What is express.Router() in Express.js?
> Клас, який повертає об'єкт router. <br />

38. What is Route Chaining is Express.js?
> Можливість викликати кілька методів (middlewares не колбек метод), по одному шляху. <br />

39. What is Route Nesting in Express.js?
> Вкладеність шлаху, наприклад /product/feature і /products/ratings, де products - це спільний префікс, а feature і ratings це вкладені шляхи. <br />

40. What are Template Engines in Express.js?
> Це бібліотеки, які дають змогу генерувати HTML контент з данними на бекенді <br />

41. Name some Template Engines libraries?
> EJS, Handlebars, Pub, Mustache, Nunjucks. <br />

42. How to implement EJS template engine is a Express.js application?
> Встановити ejx => створити ```index.ejs``` => написати в цьому файлі HTML по принципу ejs => додати view engine в ```app.js``` через ```app.set('view engine', 'ejs')``` => ```app.set('views', path.join(__dirname, 'views'))``` => ```app.get('/' (req, res) => { res.render('index'), { data: data } })``` <br />

### REST API

43. What is REST & RESTful API?
>  Архітектульний дизайн (набір правил), який використовується для написання API. RESTful означає, що певна API використовує правила і принципи, які використовуються в REST<br />

44. What are HTTP Request and Response structures in UI and REST API?
> Приклад скруктури запиту POST: "POST /api/user/create, HTTP/1.1, Host: api-server.expmple.com, uid=john&password=123, // Header, conten-type.." <br />
> Приклад відповіді: "HTTP/1.1 201 Created, Content-Type: application/json, { "userId": 123, "message": "User created" }" <br />

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
> це GET/POST/PUT/DELETE/PATCH методи <br />

48. Що таке GET, POST, PUT & DELETE HTTP methods?
> GET - отримання з сервісу, можна передивати id в запит через шлях. <br />
> POST - відправлення даних для з конкретною метою, має request body.  <br />
> PUT - оновлення або створення ресурсу, якщо його не існує, має request body.  <br />
> DELETE - видалення ресурсу, request body - опціональний, id передається через url.  <br />

49. What is the difference between PUT & PATCH methods?
> Обидва потрібні для оновлення або зміни існуючих даних. PUT - має мати всі поля не залежно від того, чи їх потрібно змінити. PATCH - відправляє тільки ті поля, які потрібно змінити. <br />

50. Explain the concept of Idempotence in RESTful APIs. 
> GET запит з однаковим url має завжди повертати одні і ті ж данні. Результати кожного запиту мають бути однаковими для GET PUT DELETE, тим часом POST не є таким, так як постійно може створювати різні інстанси. <br />

51. What are the role of status codes in RESTful APIs?
> Відповідають за інформацію про те, як пройшов запит, де 1xx (інформаційний), 2xx (успіх), 3хх (зміна шляху), 4хх (проблема зі сторони клієнта), 5хх (проблема зі сторони сервера). <br />

52. What is CORS in RESTful APIs?
> Секюріті фіча, яка використовується браузером. <br />
> CROSS ORIGIN WEB SHARING - це захист для того, щоб інші ресурси не могли доступатися, до зовнішніх ресурсів, наприклад ```http://my-project.com/index.html``` може обмінюватися даними з ```http://my-project.com/getdata```, але не може обмінюватися з ```http://external.com/getdata``` <br />
> Сабдомени по типу ```http://api.my-project.com/getdata``` також заборонені. <br />
> HTTPS ```https://my-project.com/getdata``` також заборонений по дефолту. <br />
> Якщо різні порти ```http://my-project.com:12/getdata``` також заборонено по дефолту. <br />

53. How to remove CORS restrictions RESTful APIs?
> Ми можемо забрати CORS заборони використовуючи ```app.use(cors())``` де ```cors()```це бібліотека. Це можна зробити як для конкретних ресурсів, так і відразу для всіх. <br />

54. What are Serialization & Deserialization?
> У нас є REST API 1 і REST API 2, нам потрібно ділитися даними між ними, тоді ми використовуємо концепт Serialization & Deserialization, який означає форматування даних в одному api з Object в json, відправка через network в другу api і конвертація назад з json в Object. це потрібно через те, що різні API можуть бути написані на різних технологіях, щось на JavaScript інша на C# і тд. <br />

55. What are the types of serialization?
> Binary Serialization <br />
> XML Serialization <br />
> JSON Serialzation <br />

56. Explain the concept of versioning in RESTful APIs.
> Версії потрібні для того, щоб була можливість мати стабільний продукт без зміни версії, якщо покращення, зміни нових версій не потрібні клієнту. <br />

57. What is an API document? What are the popular documentation formats?
> API document - це як swagger, документ, який може бути різних форматів, де показані усі запити, які присутні на конкретному API. <br />

58. What is the typical structure of a REST API project in Node?
> ![image](https://github.com/user-attachments/assets/20e7f010-2273-4e62-993c-64089017d21c) <br />

59. What are Authentication and Authorization?
> Authentication - процес логінізації, веріфікації користувача, за якимись ознаками для надання доступу до програми, яке перевіряється через базу <br />
> Authorization - процес надання доступ до різних фіч через визначення ролі користувача. <br />

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

68. Clustering?
>   Clustering in Node.js involves creating multiple worker processes that share the incoming workload. Each worker process runs in its own event loop, utilizing the available CPU cores. The master process manages the worker processes, distributes incoming requests, and handles process failures.

Preparing with help of the [Node JS Interview Masterclass: Top 200 Questions](https://www.udemy.com/course/node-js-interview-masterclass-top-200-questions-with-pdf/?couponCode=ST10MT8624)


69. Streams and files:<br />  
> Стріми потрібні для читання і запису файлів в Node.js. <br />
> Стрім - це колекція даних, схоже на масив чи об'єкт. Їх відмінність полягає в тому, що вони не обов'язково мають поміщатися в пам'ять, так як читання великих об'ємів даних в стрімах відбувається частинами (чанками). Також окрім роботи з великими даними, ми можемо працювати водночас з різними файлами, наприклад з допомогою методу ```.pipe``` (readableSrc.pipe(writableDest)) прочитати інформацію одного файлу і записати її в інший  <br />

> Існує 4 фундаментальні типи стрімів: <br />
> a. readable - стрім абстракції з якої читаються дані  <br />
> b. writable - стрім абстракції в яку дані будуть записуватися <br />
> c. duplex - одночасно readable і writable, прикладом якого є TCP сокет. <br />
> d. transform - той самий дуплекс, але в ньому можна трансформувати дані, які читаються або записуються <br />

> Метод ```pipe``` можна чейнити, так як він повертає місце куди будуть записані дані  <br />
> ![image](https://github.com/user-attachments/assets/2b6ae78c-2950-4cd0-9d37-0e26ecf412f8)
> Важливі івенти - це drain - який показує, що writable срім може отримати ще данні. finish - який показує, що усі дані було скинуто у систему. <br />

> Як написати свій writable стрім: <br />
> ![image](https://github.com/user-attachments/assets/bb5f8bb8-b6bb-428a-869c-309380e624a3) <br />

> Як написати свій readable стрім: <br />
> ![image](https://github.com/user-attachments/assets/ad7e1f47-d77f-4db7-8c12-b8cb30a37ae2) <br />

> Як написати свій duplex/transform стрім: <br />
> ![image](https://github.com/user-attachments/assets/3bf42a35-8136-4ba9-b36f-75c80e311248) <br />

> [Cтаття зі всіма деталями](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)

70. How HTTP works under the hood (TCP)
> HTTP (Hypertext Transfer Protocol) - це набір правил, який визнчає, як саме транспортуєються дані між клієнтом та сервером. Клієнт ініціює обмін даними викликаючи HTTP запит, в той час коли сервер отримує, опрацьовує цей запит і відправлвє відповідь клієнту. <br />
> HTTP - це протокол обміну даних, який працює через з'єднання TCP (є одним із основних протоколів набору протоколів Інтернету. Він виник у початковій реалізації мережі, в якій він доповнював Інтернет-протокол (IP)).  <br />

> HTTP має такі процеси як: <br />
> a. Request - коли користувач вводить в url лінку, тоді браузер створює HTTP запит, цей запит має в собі інформацію про ресурс, який ви хочете отримати. <br />
> b. Response - процес в якому сервер генерує відповідь на запит від клієнту, де є дані, метадані, помилки. <br />
> c. Data transfer - сервер передає відповідь назад клієнту (тобто вашому веб-браузеру) через Інтернет за допомогою протоколу HTTP. <br />
> d. Rendering - веб-браузер інтерпретує отримані дані та відображає їх на екрані, відображаючи веб-сторінку або вміст за призначенням. <br />

> Під капотом клієнт може надсилати HTTP-запит, відкриваючи TCP-з’єднання з сервером. Після встановлення з’єднання клієнт може надіслати HTTP-повідомлення через відкрите з’єднання. Повідомлення містить метод запиту, заголовки запиту, хост та будь-яку іншу відповідну інформацію. Коли сервер завершує обробку запиту, він надсилає відповідь HTTP через з’єднання TCP із запитаними даними та відповідними метаданими. <br />

> What is included in an HTTP request? <br />
> HTTP method, URL (Uniform Resource Locator), HTTP version, Headers, Body (optional) <br />
> HTTP methods -  GET, POST, DELETE, PUT, PATCH. <br />
> URL (https://learning.postman.com/docs/introduction/overview/#getting-started) - Scheme: https, Domain: learning.postman.com, Path: /docs/introduction/overview, Anchor: #getting-started. <br />
> HTTP version - Версія HTTP вказує на версію використовуваного протоколу HTTP, наприклад HTTP/1.1 або HTTP/2. <br />
> a. Host: Specifies the domain name of the server to which the request is sent. <br />
> b. User-Agent: Provides information about the client’s web browser or application. <br />
> c. Accept: Indicates the types of content the client can accept. <br />
> d. Accept-Language: Specifies the client’s preferred languages for content. <br />
> e. Connection: Specifies how the connection between the client and server should be managed. <br />
> Body - дані у форматі JSON, XML або form data <br />

> What is included in an HTTP response? <br />
> HTTP status code (1xx, 2xx, 3xx, 4xx, 5xx), Response headers, Body <br />

> What are the different API architectural patterns that use HTTP? <br />
> HTTP викистовує такі патерни, як REST, GraphQL, SOAP.

> HTTP/1.1 vs HTTP/2: <br />
> a. Multiplexing: HTTP/1.1 - запити оборобляються послідовно, означає те, що наступний запит чекає на закінчення попереднього HTTP/2 - кілька запитів одночасно може опрацьовуватися одночасно (паралельно) на одному з'єднанні. <br />
> b. Header compression: HTTP/1.1 - хедери відправляються як чистий текст HTTP/2 - хедери компресуються, що зменшує їх розмір, реалізовано через технологію HPACK. <br />
> c. Prioritization: HTTP/1.1 - немає нативного механізму приорітизації запитів HTTP/2 - можна пріорітезувати запити. <br />
> d. Server push: HTTP/1.1 - його немає HTTP/2 - сервер може надсилати ресурси клієнту до того, як клієнт запитує їх. <br />
> e. Connection management: HTTP/1.1 - потребує кілька з'єднань, для того щоб завантажити різні ресурси з серверу. HTTP/2 - Кілька запитів і відповідей можна мультиплексувати через одне з’єднання, зменшуючи накладні витрати, пов’язані зі встановленням кількох з’єднань. <br />  

> [Стаття зі всіма деталями](https://blog.postman.com/what-is-http/)

71. What is mock and stub for testing?
> a. Stub - актор, який заміняє тілки малу частину функціоналу, який потрібно протестувати, наприклад тільки один з методів класу. Приклад такого ми можемо побачити тоді коли вішаємо spy на метод об'єкту, та переписуємо його функціонал для спрощення отримання результату.  <br />
> b. Mock - може бути набагато більшим за stub, так як може повторювати функціонал всього модуля, об'єкта і так далі, а також перевіряти різну поведінку взаємодії з тим об'єктом, який він повторює. <br />

72. NPM details <br />
> a. What is npm’s package.json? - головний файл для налаштування пакетів на проекті. Зазвичай знаходиться в корневій папці. Має в собі метадату проекту (name, version, dependencies, scripts). Дозволяє запускати команди (npm run) і встановлювати залежності (npm install). Можна згенерувати через npm init. <br />

> b. What is npm’s package-lock.json? - файл в якому згенероване дерево залежностей, автоматично генерується для кожної зміни в package.json. Також основною його задачею є визначення яку версію встановлювати, для пакетів \~version або ^version з package.json, а також версія пакету може бути однаковою, але його контент різним, через це для конкретної версії в цьому файлі зберігається її ключ, яким можна дістати конкретні зміни. Різниця між ~ та ^ в тому, що перша (~) є приблизно версією і пакет з 1.2.3 може піднятися до версії 1.3.0, а друга (^) підніме версію проекту з 1.2.3 до 2.0.0, якщо вона існує. <br />

> c. What are the differences between “npm install” and “npm ci”? <br />
>   - npm install: встановить всі залежності з package.json та створить node_modules папку з залежностями, а також створить або оновить package-lock.json файл. <br />
>   - npm ci: також створює node_modules папку з залежностями, але він залежить від файлу package-lock.json, і якщо залежності з package-lock.json і package.json не сходяться, тоді команда зафейлиться. <br />

> d. What are the differences in installing conflicting peer dependencies with “force” flag vs “legacy-peer-deps” flag?  <br />
> - npm install --legacy-peer-deps: відновить поведінку інсталяції peerDependency з npm v4–v6, а це означає, що інсталяція peer dependencies буде повністю проігнорована <br />
> - npm install --force: призведе до того, що конфліктні peerDependecies у залежному пакеті будуть перевизначені залежністю, що не є peer dependencie, або першою peer dependency яку знайде. Ще одна відмінність полягає в тому, що він ініціює попередження про конфлікт. <br />

> e. What will happen if we add type=module section into package.json? - це ECMAScript Module. І це означає, що замість require треба буде використовувати import. <br />

> f. What are devDependencies? - це залежності, які використовуються тільки під час розробки і не будуть встановлені на продакшені або під час тестування. devDependencies встановлені в node_modules, якщо під час встановлення не додати прапорець --production, або якщо у вас є env змінна NODE_ENV=production. Для встановлення залежностей для розробки потрібно використовувати прапорець --save-dev <br />

> g. What are the local paths? - в секції dependencies можна встановити конкретний шлях для залежності від папки package.json, це корисно для тестування локальних пакетів. <br />

> h. What are the scoped names and how they are installed? - це пакети, які містять в собі тільки конкретний функціонал основоного пакету, зазвичай вони виглядають ось так ```@somescope/somepackagename```, де міститься назва пакету і її скоуп (функціонал) <br />

> i. What is the .npmrc file? - Файл .npmrc розташований глобально (у домашньому каталозі користувача) або на рівні проекту та використовується для заміни налаштувань за замовчуванням. Його можна використовувати для зберігання URL-адрес каналу та облікових даних, які потрібні користувачеві. Його можна змінити вручну або за допомогою команди npm config. <br />

> j. What are the Pre & Post Scripts? - це скріпти які викликаются перед (Pre) потрібним скріптом, або після (Post) його виконання. Приклад: якщо створити ```precompress```, ```compress``` і ```postcompress``` скріпти, тоді коли ти викликаєш ```npm run compress```, спочатку відпрацює ```precompress```, тоді ```compress``` і після того ```postcompress```. <br />
   
73. CAP теорема - теорема, яка каже про те, що спільне сховище даних не може одночасно надати дві з трьох таких гарантій: <br />
> - Узгодженість (Consistency) — це відноситься до лінійності. Це означає, що якщо два запити не є паралельними, то новий запит до бази даних повинен бачити дані, щонайменше, найсвіжіші, ніж попередній запит. Це відноситься до гарантії повного порядку за всіма операціями. <br />
> - Доступність (Availability). Теорема стверджує, що кожен запит, який отримує безвідмовний вузол (екземпляр бази даних, що читає), повинен давати відповідь без помилок, без гарантії, що він містить останній запис.<br />
> - Допуск до розділів (Partition Tolerance) — система повинна допускати втрату довільної кількості повідомлень між двома вузлами. <br />
![image](https://github.com/user-attachments/assets/8311fb6b-8da7-412f-a8ba-6a9f2cbd3cc3) <br />

Learn main concepts from <br />

74. https://nodejs.org/en/learn/getting-started/introduction-to-nodejs <br />
>  Node.js є open-source і cross-platform JavaScript runtime environment<br />
>  Node.js раниться на V8 JavaScript engine<br />
>  Node.js є однопоточною і ранить всі свої процеси  в ньому<br />
>  Node.js має асинхронні примітиви input/output, які запобігають блокування виконання<br />
>  Node.js повертається до операції коли її потрібно ініціалізувати і тоді коли прийде її результат<br />
>  HTTP операції та створення серверу відбувається через createServer() метод http модуля, який встроєний в Node.js<br />
>  В Node.js це event driven, що означає, те що різні івенти відпрацьовують майже для всіх операцій, їх можан слухвати і реагувати, а також створювати свої власні<br />

75. https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop <br />

76. https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick <br />

Other topics to improve: <br />

77. Profiling <br />
> Це процес під час якого збирається інформація, про роботу програми та її виконання, яке дає нам можливість виявити, що в коді споживає найбільше ресурсів. Це допомогає нам знайти місце, яке потрібно оптимізувати. <br />
> В Node.js є кілька варіантів профайлингу: <br />
> a. Вбудований прапорець ```--prof```, який додається до команди запуску програми, він створює файл і записує в нього інформацію про профілювання, після чого цей файл можна прочитати через ```tick-processor```, і проаналізувати методи, які споживають найбільше. <br />
> b. Зовнішні модулі, такі як ```v8-profiler-node8``` або ```node-inspect```, в них є більше інформації та графічний інтерфейс. <br />
> c. Chrome Dev Tools - також мають можливість профілювати код node.js. <br />

78. CPU and memory management in Node.js <br />
> Керування процесором (CPU): <br />
>  Node.js однопоточна, тому для input/output операцій вона добра працює, а для складних для CPU задач не так добре. <br />
>  Для оптимізації роботу процесора, можна використовувати Worker Threads, які дозволяють запускати додаткові потоки в окремих робітниках. <br />

> Керування пам'яттю: <br />
>  V8 має обмеження на розмір "heap" JS (замовчуванням становить приблизно 1.4 GB для 64-бітних систем) <br />
>  Node.js використовує garbage collector для автоматичного управління пам'яттю який періодично звільняє пам'ять, що була виділена для об’єктів, які більше не використовуються.

> Профілювання та моніторинг: <br />
>  Це потрібно для відслідкування завантаженості програми, та відслідкувати чи окремі блоки програми не використовують більше пам'яті ніж повинні. <br />

> Оптимізація та Найкращі Практики: <br />
>  Уникання блокування циклу подій: важливо стежити за тим, щоб CPU-інтенсивні завдання не блокували цикл подій, що може призвести до збоїв у відгук на інші запити. <br />
>  Asynchronous programming: використання асинхронних операцій і промісів для збільшення пропускної спроможності і зменшення часу відклику. <br />

79. Error handling <br />
> a. Callback Functions: Традиційно в Node.js часто використовується підхід з колбеками, де помилки передаються як перший аргумент функції-колбеку. Це дозволяє легко перевірити помилки на початку функції. <br />
> ![image](https://github.com/user-attachments/assets/77e98445-9d5a-49fe-a90f-c1b62db39336)  <br />

> b. Try/Catch: Використання конструкції try/catch для синхронного коду дозволяє перехопити помилки які виникають під час виконання блоку коду у try. <br />
> c. Promise Error Handling: Помилки в Промісах можна обробляти за допомогою методу .catch(). <br />

> d. EventEmitter Error Events: Для об'єктів, які є екземплярами EventEmitter, помилки часто передаються як події 'error'. <br />
> ![image](https://github.com/user-attachments/assets/9dca19b5-6b11-4234-9a93-07c3cab3a6b1) <br />

> e. Uncaught Exception Handler: Node.js дозволяє обробляти неперехоплені виключення на рівні процесу. <br />
> ![image](https://github.com/user-attachments/assets/d89d7f63-290c-4228-a07c-168c108c87f9) <br />

> f. Unhandled Promise Rejections: Обробка неперехоплених помилок. <br />
> ![image](https://github.com/user-attachments/assets/bb7cf56b-97ca-4f28-b879-cb93567ddb5c) <br />

80. Debugging <br />
> Вбудований інспектор Node.js <br />
>  Через Chrome DevTools. <br />

> Debugger Statements <br />
>  В JavaScript існує ключове слово debugger, яке використовується для остановки виконання коду у DevTools, коли відлагодження відбувається в браузері. <br />

> Логування <br />
>  Використання console.log, console.error, console.warn. <br />

> Використання NPM пакетів для відлагодження <br />
>  nodemon — автоматично перезапускає ваш сервер при зміні файлів. <br />
>  debug — допомагає додавати настраїваемі дебаг логи. <br />
>  node-inspector — використовується у випадках, коли --inspect не доступний. <br />

> Використання Core Modules <br />
>  Node.js має модулі які допомагають з відлагодженням, такі як util для форматування виведення, assert для афірмацій в тестах. <br />

81. Event loop phases <br />

>  ```Timers Phase```: Обробляє setTimeout() та setInterval() колбеки. <br />
>  ```I/O Callbacks Phase```: Обробляє майже всі колбеки, крім закриття колбеків, таймерів та setImmediate(). Наприклад, колбеки для вводу/виводу файлів. <br />
>  ```Idle, Prepare Phase```: Внутрішнє використання Node.js для тільки системних операцій. <br />
>  ```Poll Phase```: Відновлює виконання скриптів на час відстеження та обробки подій вводу-виводу. Переходить до фази Check якщо іде запланований скрипт setImmediate(), інакше чекає на нові події вводу-виводу. <br />
>  ```Check Phase```: Тут setImmediate() колбеки виконуються. <br />
>  ```Close Callbacks Phase```: Обробляє колбеки закриття, наприклад socket.on('close', ...). <br />
