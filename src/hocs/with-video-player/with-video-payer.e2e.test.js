import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPlayer from "./with-video-player";
import PropTypes from "prop-types";

Enzyme.configure({
  adapter: new Adapter()
});

const src = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
const poster = `/poster.jpg`;

const MockComponent = (props) => {
  return <div>{props.children}</div>;
};

MockComponent.propTypes = {
  children: PropTypes.element.isRequired
};

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`Test pause video`, () => {
  window.HTMLMediaElement.prototype.play = () => {};
  const video = mount(
      <MockComponentWrapped
        src={src}
        poster={poster}
        isPlaying={true}
      />
  );

  const videoInstance = video.instance();
  expect(videoInstance.state.isPlaying).toBe(true);

  videoInstance.setState({isPlaying: false});
  expect(videoInstance.state.isPlaying).toBe(false);
});
