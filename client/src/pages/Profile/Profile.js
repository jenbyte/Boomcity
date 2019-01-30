import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import ProfileCard from '../../components/ProfileCard';
// import ProfileGrid from '../../components/ProfileGrid';

const Profile = ({ classes, profile }) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <ProfileCard profile={profile} />
        {/* <ProfileGrid /> */}
      </div>
    </div>
  );
};

export default Profile;
