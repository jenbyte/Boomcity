import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareFormPreview';

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

export default withStyles(styles)(Share);
