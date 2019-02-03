import React from 'react';
import ItemsCard from '../ItemsCard/';
import { connect } from 'react-redux';
import { ViewerContext } from '../../context/ViewerProvider';

const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => <ItemsCard item={shareItemPreview} />}
    </ViewerContext.Consumer>
  );
};

const mapStateToProps = state => ({ shareItemPreview: state.shareItemPreview });

export default connect(mapStateToProps)(ShareItemPreview);
