import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ItemsGrid from '../../components/ItemsGrid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const Items = ({ classes, items }) => {
  return (
    <Grid className={classes.grid} container spacing={24}>
      {items.map(item => {
        return (
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardContent>
                <figure>{item.imageurl}</figure>
                <Avatar aria-label="user" className={classes.avatar}>
                  <img
                    src="https://www.gravatar.com/avatar/{item.itemowner.map(
                    owner => {
                      owner.email;
                    }
                  )}"
                  />

                  {console.log('itemowner', item.itemowner)}
                  {/* {item.itemowner.map(owner => <h2>{owner.fullname}</h2>)} */}
                </Avatar>
                <Typography>
                  <h2>{item.title}</h2>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.tags.map(tag => tag.title)}
                  </Typography>
                  <p>{item.description}</p>
                </Typography>
              </CardContent>
              <Button>Borrow</Button>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(Items);
