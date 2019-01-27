import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

function FullScreenLoader(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress
        className={classes.progress}
        color="primary"
        size={30}
        thickness={5}
      />
      <h3>Loading...</h3>
    </div>
  );
}

FullScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenLoader);
