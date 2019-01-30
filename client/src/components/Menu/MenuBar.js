import React, { Component, Fragment } from 'react';
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
import { renderToStringWithData } from 'react-apollo';

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
      <Fragment className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              href={classes}
            >
              <img
                className="img-responsive"
                src={logo}
                alt="logo"
                width="40"
              />
            </IconButton>
            <Typography color="inherit" className={classes.grow} />
            <Button color="inherit">
              <AddCircle className={classes.menuButton} href={ShareItemForm} />Share
              something
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
                >
                  <Fingerprint className={classes.menuIcon} /> Your Profile
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={this.handleClose}
                >
                  <PowerSettingsNew className={classes.menuIcon} /> Sign Out
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}
MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(MenuAppBar);
