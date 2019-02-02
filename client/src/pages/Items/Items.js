import React from 'react';
import ItemsGrid from '../../components/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <div className={classes.container}>
      <ItemsGrid className={classes.root} items={items} />
    </div>
  );
};

export default Items;
