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
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';

const ItemsCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia
          className={classes.media}
          image={item.imageurl}
          title={item.title}
          component={Link}
          to={`/profile/${item.itemowner.id}`}
        />

        <CardContent className={classes.content}>
          <div
            className={classes.userInfo}
            component={Link}
            to={`/profile/${item.itemowner.id}`}
          >
            <Avatar className={classes.avatar}>
              {item.itemowner.email ? (
                <Gravatar email={item.itemowner.email} />
              ) : (
                <Gravatar email="red@turtle.com" />
              )}
            </Avatar>
            <div className={classes.metaInfo}>
              <Typography className={classes.metaName} component="h2">
                {item.itemowner.fullname}
              </Typography>
              <Typography className={classes.metaDate}>
                {moment
                  .parseZone(item.created)
                  .startOf('minutes')
                  .fromNow()}
              </Typography>
            </div>
          </div>

          <Typography className={classes.title} component="h1">
            {item.title}
          </Typography>

          <Typography className={classes.select} color="textSecondary">
            {item.tags.map(tag => `${tag.title}`).join(', ')}
          </Typography>
          <Typography className={classes.description}>
            {item.description}
          </Typography>
        </CardContent>
      </Fragment>

      <CardActions>
        <Button className={classes.button} variant="outlined">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

ItemsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

ItemsCard.defaultProps = {
  item: {
    title: 'title',
    description: 'description',
    tags: [],
    imageurl: 'http://via.placeholder.com/350x250?text=Please select an image'
  }
};

export default withRouter(withStyles(styles)(ItemsCard));
