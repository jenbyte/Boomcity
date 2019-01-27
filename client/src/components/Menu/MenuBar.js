import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShareItemForm from '../../components/ShareItemForm';
// import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/boomtown.svg';
import MoreVert from '@material-ui/icons/MoreVert';
import AddCircle from '@material-ui/icons/AddCircle';
import styles from './styles';

function MenuBar(props) {
  const { classes } = props;
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
          <IconButton color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
