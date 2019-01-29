import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemsCard from '../ItemsCard/';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
// !!!  proptype validation look for  default props to share item card for preview

class ShareItemPreview extends Component {
  render() {
    const { classes, item } = this.props;
    // console.log(item);
    return (
      // <ItemsCard />
      <div>
        <Card className={classes.card}>
          <Fragment>
            <CardMedia
              background="#212121"
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="230"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <Card />
            <CardContent>
              <div className={classes.userInfo}>
                <Avatar aria-label="user" className={classes.avatar}>
                  <img
                  // alt={`Gravatar for ${item.itemowner.email}`}
                  // src={`https://www.gravatar.com/avatar/${
                  //   item.itemowner.email
                  // }`}
                  />
                </Avatar>
                <Typography>
                  User
                  {/* <p>{item.itemowner.fullname}</p> <p /> */}
                </Typography>
              </div>
              <Typography>
                <h1 className={classes.title}>name</h1>
                {/* <h1> {item.title} </h1> */}

                <h3 className={classes.description}> description</h3>
                {/* <p className={classes.pos} color="textSecondary">
                  {' '}
                  {item.tags.map(tag => tag.title)}{' '}
                </p>
                <p> {item.description}</p> */}
              </Typography>
            </CardContent>
          </Fragment>
          <CardActions>
            <Button size="small" color="primary">
              Borrow
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

ShareItemPreview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShareItemPreview);
