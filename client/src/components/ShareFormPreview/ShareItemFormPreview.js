import React from 'react';
import ItemsCard from '../ItemsCard/';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';

const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => (
        <ItemsCard item={{ ...shareItemPreview, itemowner: viewer }} />
      )}
    </ViewerContext.Consumer>
  );
};

const mapStateToProps = state => ({ shareItemPreview: state.shareItemPreview });

ShareItemPreview.propTypes = {
  shareItemPreview: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ShareItemPreview);
