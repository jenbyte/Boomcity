import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import SimpleCard from '../../components/Cards/cards';

const Profile = ({ classes, user }) => {
  return (
    <Fragment>
      <h1>{user} </h1>
    </Fragment>
  );
};

export default withStyles(styles)(Profile);
