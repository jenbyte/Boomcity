const { AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function setCookie({ tokenName, token, res }) {
  /** We added the 'req' object to the resolver context so we can use it to atttach the cookie.
   *  The 'req' object comes from express.
   */
  // Refactor this method with the correct configuration values.
  res.cookie(tokenName, token, { maxAgie: 6000 * 60 * 2, httpOnly: true });
}

function generateToken(user, secret) {
  const { id, email, fullname, bio } = user; // Omit the password from the token
  const token = jwt.sign({ id, email, fullname, bio }, secret);

  return token;
}

module.exports = app => {
  return {
    async signup(parent, args, context) {
      try {
        /** Use bcrypt to generate a cryptographic hash that conceals
         *  the user's password before storing it. */
        const hashedPassword = await bcrypt.hash(args.user.password, 10);

        const user = await context.pgResource.createUser({
          fullname: args.user.fullname,
          email: args.user.email,
          password: hashedPassword
        });

        console.log(user);
        setCookie({
          tokenName: app.get('JWT_COOKIE_NAME'),
          token: generateToken(user, app.get('JWT_SECRET')),
          res: context.req.res
        });

        return user.id;
      } catch (e) {
        throw new AuthenticationError(e);
      }
    },

    async login(parent, args, context) {
      try {
        const user = await context.pgResource.getUserAndPasswordForVerification(
          args.user.email
        );
        // Use bcrypt to compare the provided password to 'hashed' password stored in your database.
        const valid = await bcrypt.compare(args.user.password, user.password);
        if (!valid || !user) throw 'User was not found.';

        setCookie({
          tokenName: app.get('JWT_COOKIE_NAME'),
          token: generateToken(user, app.get('JWT_SECRET')),
          res: context.req.res
        });

        return user.id;
      } catch (e) {
        throw new AuthenticationError(e);
      }
    },

    logout(parent, args, context) {
      context.req.res.clearCookie(app.get('JWT_COOKIE_NAME'));
      return true;
    }
  };
};
