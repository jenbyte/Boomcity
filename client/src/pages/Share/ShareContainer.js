import React, { Component } from 'react';
import Share from './Share';
import FullScreenLoader from '../../components/Loader/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          console.log('data', data);
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;

          return <Share classes={this.props.classes} tags={data.tags} />;
        }}
      </Query>
    );
  }
}
export default ShareContainer;
