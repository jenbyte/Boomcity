import React, { Component } from 'react';
import Share from './Share';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/Loader/FullScreenLoader';
import { Mutation, Query } from 'react-apollo';
import { ADD_ITEM_MUTATION, ALL_TAGS_QUERY } from '../../apollo/queries';

class ShareContainer extends Component {
  render() {
    return (
      <>
        <Mutation mutation={ADD_ITEM_MUTATION}>
          {({ loading, error, data }) => {
            if (loading) return <FullScreenLoader inverted />;
            if (error) return <p>{`Error! ${error.message}`}</p>;
            // console.log('add:', data);
            return <Share classes={this.props.classes} addItem={data} />;
          }}
        </Mutation>
        <Query query={ALL_TAGS_QUERY}>
          {({ loading, error, data }) => {
            // if (loading) return <FullScreenLoader inverted />;
            if (error) return <p>{`Error! ${error.message}`}</p>;
            // console.log(data.tags);
            return <Share classes={this.props.classes} tags={data.tags} />;
          }}
        </Query>
      </>
    );
  }
}

export default withStyles(styles)(ShareContainer);
