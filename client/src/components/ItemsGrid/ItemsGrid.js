import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ItemsCard from '../ItemsCard/ItemsCard';
import styles from './styles';

const ItemsGrid = ({ classes, items, viewer }) => {
  console.log('!!!!!!!!!!!!!!!!!!', viewer);
  return (
    <Grid container className={classes.root} spacing={24}>
      {items.map(item => {
        return (
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <ItemsCard item={item} viewer={viewer} />
          </Grid>
        );
      })}
    </Grid>
  );
};

ItemsGrid.propTypes = {
  card: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  gridItem: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemsGrid);
