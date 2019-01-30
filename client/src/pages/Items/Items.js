import React from 'react';
import ItemsGrid from '../../components/ItemsGrid';

const Items = ({ classes, items }) => {
  return <ItemsGrid className={classes.root} items={items} />;
};

export default Items;
