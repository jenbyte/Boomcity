import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import PropTypes from 'prop-types';

const Profile = ({ classes, profile }) => {
  return (
    <div className={classes.container}>
      <ProfileCard profile={profile} />
    </div>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default Profile;
