import * as React from "react";
import * as PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {children} = props;

  return <React.Fragment>{children}</React.Fragment>;
};

VideoPlayer.propTypes = {
  children: PropTypes.element.isRequired
};

export default VideoPlayer;
