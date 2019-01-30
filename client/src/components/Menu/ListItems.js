import React from 'react';
import { Fingerprint, PowerSettingsNew } from '@material-ui/icons';

const renderMenu = (
  <Menu>
    <Fingerprint />
    <MenuItem>Your Profile</MenuItem>
    <PowerSettingsNew />
    <MenuItem>Sign Out</MenuItem>
  </Menu>
);
