import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core';
import ShareItemForm from '../../components/ShareItemForm';
// import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/boomtown.svg';
import {
  MoreVert,
  AddCircle,
  Fingerprint,
  PowerSettingsNew
} from '@material-ui/icons';
import styles from './styles';

// const [anchorEl, setAnchorEl] = React.useState(null);
// const isMenuOpen = Boolean(anchorEl);

// function handleProfileMenuOpen(event) {
//   setAnchorEl(event.currentTarget);
// }

// function handleMenuClose() {
//   setAnchorEl(null);
// }

const renderMenu = (
  <Menu
  // anchorEl={anchorEl}
  // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  // open={isMenuOpen}
  // onClose={handleMenuClose}
  >
    <Fingerprint />
    <MenuItem>Your Profile</MenuItem>
    <PowerSettingsNew />
    <MenuItem>Sign Out</MenuItem>
  </Menu>
);

function MenuAppBar(props) {
  const { classes } = props;
  {
    console.log(renderMenu);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            href={classes}
          >
            <img className="img-responsive" src={logo} alt="logo" width="40" />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow} />
          <Button color="inherit">
            <AddCircle className={classes.menuButton} href={ShareItemForm} />Share
            something
          </Button>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" color="inherit">
              <MoreVert />
            </IconButton>
            {renderMenu}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
