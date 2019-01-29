import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
          height="230"
        />
        <CardContent>
          <div className={classes.userInfo}>
            <Avatar aria-label="user" className={classes.avatar}>
              <img
                alt={`Gravatar for ${item.itemowner.email}`}
                src={`https://www.gravatar.com/avatar/${item.itemowner.email}`}
              />
            </Avatar>

            <Typography className={classes.metaInfo} component="h1">
              <p>{item.itemowner.fullname}</p>
              <p>created</p>
            </Typography>
          </div>
          <Typography className={classes.title} component="h1">
            <h1 className={classes.title}> {item.title} </h1>
          </Typography>
          <Typography>
            <p className={classes.pos} color="textSecondary">
              {' '}
              {item.tags.map(tag => tag.title)}{' '}
            </p>
            <h3 className={classes.description}>{item.description}</h3>
          </Typography>
        </CardContent>
      </Fragment>
      <CardActions>
        <Button
          className={classes.button}
          size="small"
          color="primary"
          variant="contained"
          component="span"
        >
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

ItemsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemsCard);
