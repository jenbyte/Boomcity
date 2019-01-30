import React from 'react';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import styles from './styles';

const ProfileCard = ({ classes, profile }) => {
  console.log('profile~', profile);
  return (
    <Card className={classes.card}>
      <CardContent className={classes.flex}>
        <div className={classes.userInfo}>
          <Avatar className={classes.avatar}>
            <Gravatar email={profile.email} />
          </Avatar>
          <Typography className={classes.fullname}>
            {profile.fullname}
          </Typography>
        </div>

        <Typography className={classes.bio}>{profile.bio}</Typography>
      </CardContent>
    </Card>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired
};

ProfileCard.defaultProps = {
  profile: {
    bio: 'No bio provided.',
    email: '',
    items: []
  }
};

export default withStyles(styles)(ProfileCard);
