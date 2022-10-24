const express = require('express');
const bodyParser = require('body-parser');
const { restart } = require('nodemon');
const graphqlHttp = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const isAuth = require('./middleware/is-auth');
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');
const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  }),
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wj6d0.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
