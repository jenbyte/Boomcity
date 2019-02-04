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

// function convertDate(date) {
//   const current = new Date();
//   {
//     if (!date) date = current;
//     const millisecondsInDay = 1000 * 60 * 60 * 24;
//     const daysAgo = Math.floor((current - date) / millisecondsInDay);
//     const millisecondsInHour = millisecondsInDay / 24;
//     const hoursAgo = Math.floor((current - date) / millisecondsInHour);

//     let timeUnit, timeCount;
//     if (daysAgo >= 1) {
//       timeCount = daysAgo;
//       timeUnit = daysAgo === 1 ? 'day' : 'days';
//     } else if (hoursAgo >= 1) {
//       timeCount = hoursAgo;
//       timeUnit = hoursAgo === 1 ? 'hour' : 'hours';
//     }
//     return timeCount ? `${timeCount} ${timeUnit} ago` : 'a few seconds ago';
//   }
// }

// function convertMS(milliseconds) {
//   let day, hour, min, sec;
//   seconds = Math.floor(milliseconds / 1000);
//   minute = Math.floor(seconds / 60);
//   seconds = seconds % 60;
//   hour = Math.floor(minute / 60);
//   minute = minute % 60;
//   day = Math.floor(hour / 24);
//   hour = hour % 24;
//   return {
//     day: day,
//     hour: hour,
//     minute: min,
//     seconds: sec
//   };
// }

const ItemsCard = ({ classes, item }) => {
  // const date = item.created
  // convertDate(date) {new Date().toLocaleDateString('en-US')}
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
                {item.created}
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
    imageurl: 'http://via.placeholder.com/350x250?text=Please select an image'
  }
};

export default withRouter(withStyles(styles)(ItemsCard));
