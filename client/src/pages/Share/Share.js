import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareFormPreview';
import PropTypes from 'prop-types';

const Share = ({ classes, tags }) => {
  return (
    <div className={classes.flexForm}>
      <div className={classes.sharePreview}>
        <ShareItemPreview />
      </div>
      <div className={classes.shareForm}>
        <ShareItemForm classes={classes} tags={tags} />
      </div>
    </div>
  );
};

Share.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired
};

export default withStyles(styles)(Share);
