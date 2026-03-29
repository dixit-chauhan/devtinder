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