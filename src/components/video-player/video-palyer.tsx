import * as React from "react";

interface Props {
  children: React.ReactElement
}

const VideoPlayer: React.FunctionComponent<Props> = (props: Props) => {
  const {children} = props;

  return <React.Fragment>{children}</React.Fragment>;
};

export default VideoPlayer;
