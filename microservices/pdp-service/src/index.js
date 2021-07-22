const path = require('path');
const express = require('express')
const rawSchema = require('./api/schema');
var { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
var app = express()

app.use(cors())

const port = process.env.PORT || 5004

//const query = `{ hello products { name, description } reviews { title, comment, grade, product { name, description } } }`;

app.use('/graphql', graphqlHTTP({
  schema: rawSchema,
  //source: query,
  graphiql: true,
}));



 app.listen(port, () => console.log(`Example app listening on port ${port}!`))