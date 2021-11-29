const { ApolloServer } = require('apollo-server-express');
const { gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolver')

const PORT = 7002;



const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app: app });
  
app.listen(PORT, ()=> {

    console.log(`hmm listeneing ****${PORT}`);

});
}

startServer();


mongoose.connect('mongodb+srv://manasa:manusankar@cluster0.fyur2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('mongodb connected::::::::::::::**************************::::::')
  })
