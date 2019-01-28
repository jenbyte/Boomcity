import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

// class ShareItemPreview extends Component {
//   render() {
//     return (
//       <Card>
//         <h1>preview</h1>
//       </Card>
//     );
//   }
// }

function ShareItemPreview(props) {
  const { classes, items } = props;

  return (
    <>
      {items.map(item => {
        return (
          <Card className={classes.card}>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={item.imageurl}
                title={item.title}
              />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.title}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                {item.tags.map(tag => tag.title)}
              </Typography>

              <Typography component="p">
                <p>{item.description}</p>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}

ShareItemPreview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShareItemPreview);
