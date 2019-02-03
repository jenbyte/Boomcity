import React from 'react';
import ProfileCard from '../../components/ProfileCard';

const Profile = ({ classes, profile }) => {
  console.log(profile);
  return (
    <div className={classes.container}>
      {/* <div className={classes.card}> */}
      <ProfileCard profile={profile} />
      {/* </div> */}
    </div>
  );
};

export default Profile;
