import React, { Component } from 'react';
// import Home from './Home';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TAGS = gql`
  {
    tags {
      id
      title
    }
  }
`;

class HomeContainer extends Component {
  render() {
    return <Query query={GET_TAGS} />;
    // <Home classes={this.props.classes} />;
  }
}
// return (
// <Query query={GET_TAGS}>
//   {({ loading, error, data }) => {
//     if (loading) return <p>'Loading...'</p>;
//     if (error) return <p>`Error: ${error.message}`</p>;

//     console.log('data', data);

//     return <p>data received</p>;
//   }};
// </Query>
// )

export default withStyles(styles)(HomeContainer);
