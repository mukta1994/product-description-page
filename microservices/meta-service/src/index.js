

const express = require('express')
const helmet = require("helmet");

const app = express();
app.use(helmet());

const port = process.env.PORT || 5003

var routes = require('./api/routes');

routes(app);

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))