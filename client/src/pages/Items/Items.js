import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemsGrid from '../../components/ItemsGrid';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';

const Items = ({ classes, items }) => {
  return (
    <ItemsGrid className={classes} items={items} />
    // <Grid className={classes.grid} container spacing={24}>
    //   {items.map(item => {
    //     return (
    //       <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
    //         {/* <ItemsCard /> */}
    //         <Card className={classes.card}>
    //           <CardContent>
    //             <figure>{item.imageurl}</figure>

    // <Avatar aria-label="user" className={classes.bigAvatar}>
    //   <img
    //     src="https://www.gravatar.com/avatar/{item.itemowner.map(
    //     owner => {
    //       owner.email;
    //     }
    //   )}"
    //   />

    //   {/* {console.log('itemowner', item.itemowner)} */}
    //   {/* {item.itemowner.map(owner => <h2>{owner.fullname}</h2>)} */}
    // </Avatar>

    //             <Typography>
    //               <h2>{item.title}</h2>
    //               <Typography
    //                 className={classes.title}
    //                 color="textSecondary"
    //                 gutterBottom
    //               >
    //                 {item.tags.map(tag => tag.title)}
    //               </Typography>
    //               <p>{item.description}</p>
    //             </Typography>
    //           </CardContent>
    //           <Button>Borrow</Button>
    //         </Card>
    //       </Grid>
    //   );
    // })}
    // </Grid>
  );
};

export default withStyles(styles)(Items);
