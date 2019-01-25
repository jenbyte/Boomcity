import React, { Component } from 'react';
import ItemsCard from './ItemsCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { ITEM_QUERY } from '../../apollo/queries';

class ItemsCardContainer extends Component {
  render() {
    return (
      <Query query={ITEM_QUERY} variables={{ id: 0 }}>
        {({ loading, error, data }) => {
          //   if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          console.log(data);
          return <ItemsCard classes={this.props.classes} items={data.items} />;
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(ItemsCardContainer);
