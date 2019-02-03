const { ApolloServer } = require('apollo-server-express');
const { apolloUploadExpress } = require('apollo-upload-server');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('../api/schema');
let resolvers = require('../api/resolvers');

module.exports = ({ app, pgResource }) => {
  resolvers = resolvers(app);

  // Use 'makeExecutableSchema' to wire up your schema to your resolvers:
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const apolloServer = new ApolloServer({
    context: ({ req }) => {
      // to be added to Apollo's context:
      const tokenName = app.get('JWT_COOKIE_NAME');
      const token = req ? req.cookies[tokenName] : undefined;

      return {
        pgResource,
        req,
        token
      };
    },
    schema
  });

  apolloServer.applyMiddleware({
    app,
    uploads: true,
    cors: app.get('CORS_CONFIG'),
    uploads: apolloUploadExpress({
      maxFileSize: 10000000 // 10mb
    })
  });
};
