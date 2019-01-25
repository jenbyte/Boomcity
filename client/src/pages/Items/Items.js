import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ItemsGrid from '../../components/ItemsGrid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const Items = ({ classes, items }) => {
  return (
    <Grid className={classes.grid} container spacing={8}>
      <Grid container className={classes.demo} justify="center">
        {items.map(item => {
          return (
            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <Card className={classes.card}>
                <Typography>
                  <h2>{item.title}</h2>
                  <figure>{item.imageurl}</figure>
                  <p>{item.description}</p>
                  <p>{item.tags.map(tag => tag.title)}</p>
                </Typography>
                <Button>Borrow</Button>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Items;
