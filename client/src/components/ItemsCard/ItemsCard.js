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
import { Link, withRouter } from 'react-router-dom';

function convertDate(date) {
  const now = new Date();
  {
    if (!date) date = now;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const daysAgo = Math.floor((now - date) / millisecondsInDay);
    const millisecondsInHour = millisecondsInDay / 24;
    const hoursAgo = Math.floor((now - date) / millisecondsInHour);

    let timeUnit, timeCount;
    if (daysAgo >= 1) {
      timeCount = daysAgo;
      timeUnit = daysAgo === 1 ? 'day' : 'days';
    } else if (hoursAgo >= 1) {
      timeCount = hoursAgo;
      timeUnit = hoursAgo === 1 ? 'hour' : 'hours';
    }
    return timeCount ? `${timeCount} ${timeUnit} ago` : 'a few seconds ago';
  }
}

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

        <CardContent>
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
              <Typography className={classes.metaName}>
                {item.itemowner.fullname}
              </Typography>
              <Typography className={classes.metaDate}>
                {convertDate(item.created)}
              </Typography>
            </div>
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

export default withRouter(withStyles(styles)(ItemsCard));
