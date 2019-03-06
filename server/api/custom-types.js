const { GraphQLScalarType } = require('graphql');

const { Kind } = require('graphql/language');

const UploadScalar = new GraphQLScalarType({
  name: 'Upload',
  description:
    'The `Upload` scalar type represents a file upload promise that resolves ' +
    'an object containing `stream`, `filename`, `mimetype` and `encoding`.',
  parseValue: value => value,
  parseLiteral() {
    throw new Error('Upload scalar literal unsupported');
  },
  serialize() {
    throw new Error('Upload scalar serialization unsupported');
  }
});

/**  Custom Types
 *
 *  GraphQL has these built-in Scalar Types: https://graphql.org/learn/schema/#scalar-types
 *  Scalar type validates the information being sent and received from GraphQL API.
 *
 *  Apollo helps create custom types. We'll create our own custom type to handle the value
 *  from the 'created' field on Item: https://www.apollographql.com/docs/graphql-tools/scalars.html
 *
 *  Rmb to add custom Date to schema
 */

const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value); // ast value is always in string format
    }
    return null;
  }
});

module.exports = {
  UploadScalar,
  DateScalar
};
