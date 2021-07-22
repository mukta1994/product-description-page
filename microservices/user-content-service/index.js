
const express = require('express')
const helmet = require("helmet");
const apiKeyAuth = require('api-key-auth');

const app = express();
app.use(helmet());

const port = process.env.PORT || 5002

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

