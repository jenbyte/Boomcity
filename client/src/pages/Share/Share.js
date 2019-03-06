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
        <ShareItemPreview className={classes} />
      </div>
      <div className={classes.shareForm}>
        <ShareItemForm tags={tags} className={classes} />
      </div>
    </div>
  );
};

Share.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired
};

export default withStyles(styles)(Share);
