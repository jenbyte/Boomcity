import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/Loader/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {
  render() {
    const id = this.props.match.params.userid;

    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query
            query={ALL_USER_ITEMS_QUERY}
            variables={{ id: id || viewer.id }}
          >
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader inverted />;
              if (error) return <p>{`Error! ${error.message}`}</p>;
              return (
                <Profile classes={this.props.classes} profile={data.user} />
              );
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileContainer);
