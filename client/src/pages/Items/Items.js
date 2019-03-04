import React from 'react';
import ItemsGrid from '../../components/ItemsGrid';
import PropTypes from 'prop-types';

const Items = ({ classes, items }) => {
  return (
    <div className={classes.container}>
      <ItemsGrid className={classes.root} items={items} />
    </div>
  );
};

Items.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired
};

export default Items;
