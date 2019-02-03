import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';

function FullScreenLoader(props) {
  const { classes } = props;
  // const sentences = [
  //   'Food items do not need to be returned to original owner.',
  //   'We are not liable for the items posted on this site. Borrow at your own risk.',
  //   ''
  // ];
  // const sentence = sentences[Math.floor(Math.random() * sentences.length)];

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <CircularProgress color="primary" size={50} thickness={5} />{' '}
        <Typography className={classes.quote} component="h3">
          "Food items do not need to be returned to original owner."
        </Typography>
      </div>
    </div>
  );
}

FullScreenLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenLoader);
