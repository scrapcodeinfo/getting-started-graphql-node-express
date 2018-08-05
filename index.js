const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const PORT = 8080;

const schema = buildSchema(`
  type Query {
    greeting: String
  }
`)
const rootValue = {
  greeting: () => "This is my first query, welcome to GraphQL world",
}

app.get('/', (req, res) => {
  res.send(`<a href='graphiql'>Click here</a> to access GraphiQL`);
});

app.use('/graphiql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.listen(PORT, () => "GraphQL server is running...");




