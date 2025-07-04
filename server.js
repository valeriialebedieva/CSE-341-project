const express = require('express');
const app = express();
const mongodb = require('./data/db');
const port = process.env.PORT || 3000;
// const host = process.env.HOST || "localhost"
app.use('/', require('./routers'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and Node is running on port ${port}`);
    });
  }
});