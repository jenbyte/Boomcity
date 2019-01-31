import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core';
import ShareItemForm from '../../components/ShareItemForm';
import logo from '../../images/boomtown.svg';
import {
  MoreVert,
  AddCircle,
  Fingerprint,
  PowerSettingsNew
} from '@material-ui/icons';
import useStyles from './styles';
// import { renderToStringWithData } from 'react-apollo';

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              href="/items"
            >
              <img
                className="img-responsive"
                src={logo}
                alt="logo"
                width="40"
              />
            </IconButton>
            <div className={classes.grow} />

            <Button
              color="inherit"
              className={classes.shareButton}
              href="/share"
            >
              {/* className={classes.menuButton} */}
              <AddCircle />Share something
            </Button>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <MoreVert />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={this.handleClose}
                  to="/profile"
                >
                  {/* className={classes.menuIcon} */}
                  <Fingerprint /> Your Profile
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={this.handleClose}
                  to="/logout"
                >
                  {/* className={classes.menuIcon} */}
                  <PowerSettingsNew /> Sign Out
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(MenuAppBar);
