import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
// import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';

export default ({ match }) => (
  <Fragment>
    {/* @TODO: Add your menu component here */}

    <Switch>
      {/**
       * @TODO: add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}

      <Route exact path="/welcome" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:userid" component={Profile} />
      <Route exact path="/share" component={Share} />
      <Redirect to="/items" />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Fragment>
);
