import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
// import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import MenuBar from '../components/Menu/MenuBar';
import { ViewerContext } from '../context/ViewerProvider';
import FullScreenLoader from '../components/Loader/FullScreenLoader';

export default () => (
  <React.Fragment>
    <ViewerContext.Consumer>
      {({ viewer, loading }) => {
        {
          if (loading) return <FullScreenLoader inverted />;
          if (!viewer) {
            return (
              <Switch>
                <Route exact path="/welcome" component={Home} />;
                <Redirect from="*" to="/welcome" />
              </Switch>
            );
          } else {
            return (
              <>
                <MenuBar />
                <Switch>
                  <Route exact path="/items" component={Items} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/profile/:userid" component={Profile} />
                  <Route exact path="/share" component={Share} />
                  <Redirect from="*" to="/items" />
                </Switch>
              </>
            );
          }
        }
      }}
    </ViewerContext.Consumer>
  </React.Fragment>
);
