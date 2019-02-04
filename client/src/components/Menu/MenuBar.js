import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from '@material-ui/core';
import logo from '../../images/boomtown.svg';
import {
  MoreVert,
  AddCircle,
  Fingerprint,
  PowerSettingsNew
} from '@material-ui/icons';
import useStyles from './styles';
import { graphql, compose } from 'react-apollo';
import { LOGOUT_MUTATION, VIEWER_QUERY } from '../../apollo/queries';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class MenuAppBar extends React.Component {
  state = {
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
    const { classes, location } = this.props;
    const { anchorEl } = this.state;
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

            <div className={classes.shareButton} />
            {location.pathname === `/share` ? (
              ''
            ) : (
              <Button color="inherit" href="/share">
                <AddCircle className={classes.addCircle} />Share something
              </Button>
            )}

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
                  component={Link}
                  to="/profile"
                >
                  <Fingerprint className={classes.menuIcon} /> Your Profile
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={e => {
                    e.preventDefault();
                    this.props.logoutMutation({});
                  }}
                >
                  <PowerSettingsNew className={classes.menuIcon} /> Sign Out
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = { classes: PropTypes.object.isRequired };

const refetchQueries = [{ query: VIEWER_QUERY }];

export default withRouter(
  compose(
    graphql(LOGOUT_MUTATION, {
      options: { refetchQueries },
      name: 'logoutMutation'
    }),
    withStyles(useStyles)
  )(MenuAppBar)
);
