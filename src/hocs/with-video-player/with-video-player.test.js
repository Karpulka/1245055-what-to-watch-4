import React from "react";
import renderer from "react-test-renderer";
import withVideoPlayer from "./with-video-player";
import PropTypes from "prop-types";

const MockComponent = (props) => {
  return <div>{props.children}</div>;
};

MockComponent.propTypes = {
  children: PropTypes.element.isRequired
};

const src = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
const poster = `/poster.jpg`;

it(`Render withAudioPlayer`, () => {
  const VideoPlayerWrapper = withVideoPlayer(MockComponent);

  const tree = renderer
    .create(<VideoPlayerWrapper
      src={src}
      poster={poster}
      isStartPlaying={false}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
