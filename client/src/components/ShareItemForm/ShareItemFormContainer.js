import React, { Component } from 'react';
import ShareItemForm from './ShareItemForm';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ShareItemFormContainer extends Component {
  render() {
    return <ShareItemForm classes={this.props.classes} />;
  }
}

export default withStyles(styles)(ShareItemFormContainer);
