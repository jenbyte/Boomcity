import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';

function FullScreenLoader(props) {
  const { classes } = props;
  return (
    <div className={classes.flex}>
      <CircularProgress color="primary" size={30} thickness={8} />{' '}
      <Typography className={classes.loading} component="h3">
        Loading...
      </Typography>
    </div>
  );
}

FullScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenLoader);
