- Initializing npm application
  npm init
- Installing express library
  npm i express
- Creating server with express library
    - const express = require('express');
      const app = express();
      app.listen(7777);
    - Handling requests using app.use
      app.use((req, res) => res.send("Hello World from server"))
- Using nodemon to run the node application
  nodemon src/app.js instead of node src/app.js
- Configuring script using package.json and running using npm
    - "start": "node src/app.js",   (npm run start)
      "dev": "nodemon src/app.js"   (npm run dev)
- Request handling
  - ? (Optional)
  - + (Any occurence)
  * (any character)
  - Using Regex 
  /a/
  /.*fly$/ Anything ending with "fly"
  - Reading the query params
  /user?id=1234&name=Dixit
  {id: '1234', name: 'Dixit'} // req.query
  - Reading the dynamic routes 
  req.params
  /user/1234
  /user/:userId
  {userId: '1234'} // req.params
  - Route Handlers & Middlewares
    - One route can have multiple route handlers
    - Node js does not automatically send request to second request handler and therefore next is used which is passed as third parameter to request handler (req, res, next)
    - In case response is already sent then following error comes
    "Cannot set headers after they are sent to the client"
    - In case next() is called but no route handler is defined it will give error as node js is expecting a route handler
    "Cannot GET /user"
    - Route handlers can be wrapped inside array & in any order
    - GET /user => chain of middlerware => request handler
- app.use() vs app.all()    
- Error Handling
  - app.use('/', (err, req, res, next) => {})
- Connect your application to database
- Create a User Schema & Model
- Saving data into database using user.save();
- How to read JSON data in express?
  - Use middleware
  - app.use(express.json());
