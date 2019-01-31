import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import styles from './styles';

const ItemsCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia
          className={classes.media}
          image={item.imageurl}
          title={item.title}
          // src={item.imageurl}
        />

        <CardContent>
          <div className={classes.userInfo}>
            <Avatar className={classes.avatar}>
              <Gravatar email={item.itemowner.email} />
            </Avatar>
            <Typography className={classes.metaInfo}>
              {item.itemowner.fullname}
              <p className={classes.pos}>{item.created} </p>
            </Typography>
          </div>
          <Typography className={classes.title}>{item.title}</Typography>
          <Typography>
            <p className={classes.select} color="textSecondary">
              {item.tags.map(tag => `${tag.title}`).join(', ')}
            </p>
            <p className={classes.description}>{item.description}</p>
          </Typography>
        </CardContent>
      </Fragment>
      <CardActions>
        <Button className={classes.button}>Borrow</Button>
      </CardActions>
    </Card>
  );
};

ItemsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

ItemsCard.defaultProps = {
  item: {
    title: 'title',
    description: 'description',
    tags: [],
    imageurl: 'http://via.placeholder.com/350x250?text=Please select an image',
    itemowner: {}
  }
};

export default withStyles(styles)(ItemsCard);
