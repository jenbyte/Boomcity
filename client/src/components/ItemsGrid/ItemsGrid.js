import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const ItemsGrid = ({ classes, spacing }) => {
  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.demo}
          justify="center"
          spacing={Number(spacing)}
        >
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Card className={classes.card} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.control}>
          {console.log(classes.card)}
          <Grid container>
            <Grid item />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

ItemsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemsGrid);
