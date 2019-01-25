import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ItemsGrid from '../../components/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <Fragment>
      {items.map(i => (
        <li>
          {i.title}
          <p>{i.description}</p>
        </li>
      ))}
    </Fragment>
  );
};

export default Items;
