const { gql } = require('apollo-server-express');

/**
 *  @TODO: Boomtown Schema
 *
 * Define the types in your GraphQL schema here.
 * For each type, remove the `_: Boolean` placeholder and add the
 * fields as directed. Be sure to finish writing resolvers for all types
 * and any relational fields, where required.
 *
 * We will create the custom Date scalar together.
 */
module.exports = gql`
  scalar Upload

  scalar Date

  type Item {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    ownerid: User!
    tags: [Tag]
    created: Date!
    borrowerid: User
    _: Boolean
  }

  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Item]
    borrowed: [Item]
    _: Boolean
  }

  type Tag {
    id: ID!
    title: String!
    _: Boolean
  }

  type File {
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    itemid: ID!
    _: Boolean
  }

  input AssignedTag {
    id: ID!
    title: String!
    _: Boolean
  }

  input AssignedBorrower {
    id: ID!
    _: Boolean
  }

  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag]!
    _: Boolean
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    addItem(item: NewItemInput!, image: Upload): Item
  }
`;
