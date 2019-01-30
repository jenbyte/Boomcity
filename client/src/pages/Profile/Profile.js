import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Profile = ({ classes, profile }) => {
  return (
    <div>
      <ProfileCard profile={profile} />
    </div>
  );
};

export default Profile;
