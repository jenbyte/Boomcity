/**
 *  @TODO: Handling Server Errors
 *
 *  Once you've completed your pg-resource.js methods and handled errors
 *  use the ApolloError constructor to capture and return errors from your resolvers.

 *  The user resolver has been completed as an example of what you'll need to do.
 *  Finish of the rest of the resolvers when you're ready.
 */
const { ApolloError } = require('apollo-server-express');

// @TODO: Uncomment these lines later when we add auth
const jwt = require('jsonwebtoken');
// const authMutations = require("./auth")
const { UploadScalar, DateScalar } = require('../custom-types');

module.exports = app => {
  return {
    // Upload: UploadScalar,
    // Date: DateScalar,

    Query: {
      viewer() {
        /* @TODO: Authentication - Server
         *
         *  If you're here, you have successfully completed the sign-up and login resolvers
         *  and have added the JWT from the HTTP cookie to your resolver's context.
         *
         *  The viewer is what we're calling the current user signed into your application.
         *  When the user signed in with their username and password, an JWT was created with
         *  the user's information cryptographically encoded inside.
         *
         *  To provide information about the user's session to the app, decode and return
         *  the token's stored user here. If there is no token, the user has signed out,
         *  in which case you'll return null
         */
        return null;
      },
      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user.rows[0];
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(parent, args, { pgResource }, info) {
        // @TODO: Replace this mock return statement with the correct tags from Postgres
        try {
          const tags = await pgResource.getTags(args);
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    User: {
      /**
       *  @TODO: Advanced resolvers
       *
       *  The User GraphQL type has two fields that are not present in the
       *  user table in Postgres: items and borrowed.
       *
       *  According to our GraphQL schema, these fields should return a list of
       *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
       *
       */
      async items(user, args, { pgResource }) {
        try {
          const userItems = await pgResource.getItemsForUser(user.id);
          return userItems;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrowed(user, _args, { pgResource }) {
        try {
          const borrowedItems = await pgResource.getBorrowedItemsForUser(
            user.id
          );
          return borrowedItems;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    Item: {
      /*@TODO: Advanced resolvers
       *
       *  The Item GraphQL type has two fields that are not present in the
       *  Items table in Postgres: itemowner, tags and borrower.
       *
       * According to our GraphQL schema, the itemowner and borrower should return
       * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
       */
      async itemowner(item, args, { pgResource }) {
        try {
          const itemOwner = await pgResource.getUserById(item.ownerid);
          // console.log(item.ownerid);
          return itemOwner;
        } catch (e) {
          throw new ApolloError(e);
          // id: 29,
          // fullname: 'Mock user',
          // email: 'mock@user.com',
          // bio: 'Mock user. Remove me.'
        }
      },
      async tags(item, args, { pgResource }) {
        // @DONE: Replace this mock return statement with the correct tags for the queried Item from Postgres
        try {
          const itemTags = await pgResource.getTagsForItem(item.id);
          console.log(itemTags);
          return itemTags;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrower(item, args, { pgResource }) {
        /**
         * @TODO: Replace this mock return statement with the correct user from Postgres
         * or null in the case where the item has not been borrowed.
         */
        try {
          const itemBorrower = await pgResource.getUserById(item.borrowerid);
          console.log(itemBorrower);
          return itemBorrower;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async imageurl({ imageurl, imageid, mimetype, data }) {
        if (imageurl) return imageurl;
        if (imageid) {
          return `data:${mimetype};base64, ${data}`;
        }
      }
    },

    Mutation: {
      // @TODO: Uncomment this later when we add auth
      // ...authMutations(app),
      // -------------------------------

      async addItem(parent, { filter }, { pgResource }, info) {
        /* @TODO: Destructuring
         *
         *  The 'args' and 'context' parameters of this resolver can be destructured
         *  to make things more readable and avoid duplication.
         *
         *  When finished with this resolver, destructure all necessary
         *  parameters in all of your resolver functions.
         *
         *  Look at user resolver for example of what destructuring should look like.
         */

        image = await image;
        const user = await jwt.decode(context.token, app.get('JWT_SECRET'));
        const newItem = await context.pgResource.saveNewItem({
          item: args.item,
          image: args.image,
          user
        });
        return newItem;
      }
    }
  };
};
